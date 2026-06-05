# api.tag

Set API tags.

## Usage

```properties
api.tag=#tag
```

The value can be:
- A Javadoc tag name (e.g., `#tag` reads the `@tag` tag from Javadoc)
- A Groovy script (e.g., `groovy:it.containingClass().hasAnn("java.lang.Deprecated") ? "deprecated" : null`)
- A static string (e.g., `deprecated`)

## Example

```java
/**
 * Get user list
 * @tag user
 * @tag list
 */
@GetMapping("/users")
public List<User> listUsers() {}
```

With `api.tag=#tag`, the API tags will be "user" and "list".
