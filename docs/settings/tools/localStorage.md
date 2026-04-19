# localStorage

Persistent local storage for scripts. Data stored in localStorage persists across IDE restarts.

## Usage

```properties
http.call.after=groovy:'''
if (it.response().code() == 200) {
    localStorage.set("token", it.response().body().token)
}
'''
```

## Methods

- `localStorage.get(key)` — Get a value
- `localStorage.set(key, value)` — Set a value
- `localStorage.remove(key)` — Remove a value
- `localStorage.clear()` — Clear all values
