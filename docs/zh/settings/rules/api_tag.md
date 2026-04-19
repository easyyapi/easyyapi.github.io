# api.tag

Set API tags.

## Usage

```properties
api.tag=groovy:it.tags()
```

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
