# session

Session-scoped storage for scripts. Data stored in session is cleared when the IDE is restarted.

## Usage

```properties
http.call.before=groovy:'''
def token = session.get("token")
if (token == null) {
    // Login and store token
    def response = httpClient.post("http://auth-server/login", [user: "admin", password: "123"])
    token = response.body().token
    session.set("token", token)
}
it.header("Authorization", "Bearer " + token)
'''
```

## Methods

- `session.get(key)` — Get a value
- `session.set(key, value)` — Set a value
- `session.remove(key)` — Remove a value
- `session.clear()` — Clear all values
