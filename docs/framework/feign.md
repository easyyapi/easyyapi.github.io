# Feign

EasyYapi supports Spring Cloud OpenFeign declarative HTTP client.

## Supported Annotations

- `@FeignClient`
- `@RequestMapping` / `@GetMapping` / `@PostMapping` etc.

## Example

```java
/**
 * User Service Client
 */
@FeignClient(name = "user-service", url = "http://user-service")
public interface UserClient {

    /**
     * Get user info
     *
     * @param id User ID
     * @return User info
     */
    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable("id") Long id);

    /**
     * Create user
     *
     * @param user User info
     * @return Created user
     */
    @PostMapping("/api/users")
    User createUser(@RequestBody User user);
}
```

## Configuration

```properties
class.is.feign.ctrl=groovy:it.hasAnn("org.springframework.cloud.openfeign.FeignClient")
```
