# api.name

Set the API name.

## Usage

```properties
api.name=#name
```

The value can be:
- A Javadoc tag name (e.g., `#name` uses the first line of Javadoc)
- A Groovy script (e.g., `groovy:it.name()`)
- A static string

## Example

```java
/**
 * Get user list
 */
@GetMapping("/users")
public List<User> listUsers() {}
```

With `api.name=#name`, the API name will be "Get user list".
