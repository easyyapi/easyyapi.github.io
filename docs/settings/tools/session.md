# session

Session-scoped storage for scripts. Data stored in `session` is cleared when the IDE is restarted, making it ideal for temporary caching during a session.

## Usage

```properties
http.call.before=groovy:'''
def token = session.get("token")
if (token == null) {
    def response = httpClient.post("http://auth-server/login", [
        user: "admin",
        password: "123"
    ])
    token = response.body().token
    session.set("token", token)
}
it.header("Authorization", "Bearer " + token)
'''
```

## Methods

### Basic Operations

| Method | Description |
|--------|-------------|
| `session.get(name)` | Get a value by name |
| `session.set(name, value)` | Set a value by name |
| `session.remove(name)` | Remove a value by name |
| `session.clear()` | Clear all values |

### Grouped Operations

Values can be organized into groups for better organization:

| Method | Description |
|--------|-------------|
| `session.get(group, name)` | Get a value from a group |
| `session.set(group, name, value)` | Set a value in a group |
| `session.remove(group, name)` | Remove a value from a group |
| `session.clear(group)` | Clear all values in a group |

### Stack Operations

Useful for maintaining state across multiple calls:

| Method | Description |
|--------|-------------|
| `session.push(name, value)` | Push a value onto a stack |
| `session.push(group, name, value)` | Push a value onto a group stack |
| `session.pop(name)` | Pop and return the top value from a stack |
| `session.pop(group, name)` | Pop from a group stack |
| `session.peek(name)` | Return the top value without removing it |
| `session.peek(group, name)` | Peek at a group stack |

### Key Management

| Method | Description |
|--------|-------------|
| `session.keys()` | Get all keys |
| `session.keys(group)` | Get all keys in a group |

## Example

### Temporary Token Cache

```properties
http.call.before=groovy:'''
def token = session.get("auth", "token")
if (token == null) {
    def response = httpClient.post("http://auth-server/login", [
        user: config.get("auth.user"),
        password: config.get("auth.password")
    ])
    token = response.body().token
    session.set("auth", "token", token)
    session.set("auth", "tokenExpiry", System.currentTimeMillis() + 3600000)
}

def expiry = session.get("auth", "tokenExpiry") ?: 0
if (System.currentTimeMillis() > expiry) {
    session.remove("auth", "token")
    session.remove("auth", "tokenExpiry")
}
it.header("Authorization", "Bearer " + token)
'''
```

### Request Tracking

```properties
export.before=groovy:'''
session.set("export", "startTime", System.currentTimeMillis())
session.set("export", "apiCount", 0)
'''

method.parse.after=groovy:'''
def count = session.get("export", "apiCount") ?: 0
session.set("export", "apiCount", count + 1)
'''

export.after=groovy:'''
def startTime = session.get("export", "startTime")
def count = session.get("export", "apiCount")
if (startTime && count) {
    def duration = System.currentTimeMillis() - startTime
    logger.info("Exported " + count + " APIs in " + duration + "ms")
}
session.clear("export")
'''
```

## Difference from localStorage

| Feature | session | localStorage |
|---------|---------|--------------|
| Persistence | Cleared on IDE restart | Persists across restarts |
| Storage location | Memory | Local database |
| Use case | Temporary caching | Long-term storage |

## See Also

- [localStorage](./localStorage) - Persistent storage
- [config](./config) - Configuration access
