# api.tag

Set API tags.

## Usage

```properties
api.tag=#tag
```

The value can be:

- A Javadoc tag name (e.g., `#tag` reads the first `@tag` from Javadoc)
- A Groovy script (e.g., `groovy:it.docs("tag")?.join("\n")` reads all `@tag` values)
- A static string (e.g., `deprecated`)

Multiple `api.tag` rules are merged (duplicates removed), so you can define multiple rules to collect tags from different sources.

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

- With `api.tag=#tag`, the API tag will be "user" (first `@tag` only).
- With `api.tag=groovy:it.docs("tag")?.join("\n")`, the API tags will be "user" and "list" (all `@tag` values).
