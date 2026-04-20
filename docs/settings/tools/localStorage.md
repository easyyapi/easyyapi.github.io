# localStorage

Persistent local storage for scripts. Data stored in `localStorage` persists across IDE restarts and is stored in a local database.

## Usage

```properties
http.call.after=groovy:'''
if (it.response().code() == 200) {
    localStorage.set("token", it.response().body().token)
}
'''
```

## Methods

### Basic Operations

| Method | Description |
|--------|-------------|
| `localStorage.get(name)` | Get a value by name |
| `localStorage.set(name, value)` | Set a value by name |
| `localStorage.remove(name)` | Remove a value by name |
| `localStorage.clear()` | Clear all values |

### Grouped Operations

Values can be organized into groups for better organization:

| Method | Description |
|--------|-------------|
| `localStorage.get(group, name)` | Get a value from a group |
| `localStorage.set(group, name, value)` | Set a value in a group |
| `localStorage.remove(group, name)` | Remove a value from a group |
| `localStorage.clear(group)` | Clear all values in a group |

### Stack Operations

Useful for maintaining state across multiple calls:

| Method | Description |
|--------|-------------|
| `localStorage.push(name, value)` | Push a value onto a stack |
| `localStorage.push(group, name, value)` | Push a value onto a group stack |
| `localStorage.pop(name)` | Pop and return the top value from a stack |
| `localStorage.pop(group, name)` | Pop from a group stack |
| `localStorage.peek(name)` | Return the top value without removing it |
| `localStorage.peek(group, name)` | Peek at a group stack |

### Key Management

| Method | Description |
|--------|-------------|
| `localStorage.keys()` | Get all keys |
| `localStorage.keys(group)` | Get all keys in a group |

## Example

### Token Storage

```properties
http.call.before=groovy:'''
def token = localStorage.get("auth", "token")
if (token == null) {
    def response = httpClient.post("http://auth-server/login", [
        user: "admin",
        password: "123"
    ])
    token = response.body().token
    localStorage.set("auth", "token", token)
}
it.header("Authorization", "Bearer " + token)
'''
```

### Request Counter

```properties
http.call.after=groovy:'''
def count = localStorage.get("stats", "requestCount") ?: 0
localStorage.set("stats", "requestCount", count + 1)
logger.info("Total requests: " + (count + 1))
'''
```

### Stack-based State

```properties
class.parse.before=groovy:'''
localStorage.push("context", "class", it.name())
'''

class.parse.after=groovy:'''
localStorage.pop("context", "class")
'''
```

## See Also

- [session](./session) - Session-level storage (cleared on restart)
- [config](./config) - Configuration access
