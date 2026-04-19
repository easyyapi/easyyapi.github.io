# Spring Boot

EasyYapi fully supports the Spring Boot framework and can automatically recognize Spring MVC and Spring WebFlux annotations.

## Supported Annotations

### Controller Annotations

- `@RestController`
- `@Controller`

### Request Mapping Annotations

- `@RequestMapping`
- `@GetMapping`
- `@PostMapping`
- `@PutMapping`
- `@DeleteMapping`
- `@PatchMapping`

### Parameter Annotations

- `@RequestParam` — Query parameter
- `@PathVariable` — Path parameter
- `@RequestBody` — Request body
- `@RequestHeader` — Request header
- `@CookieValue` — Cookie value
- `@SessionAttribute` — Session attribute

## Example

```java
/**
 * User Management API
 *
 * @module User Management
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    /**
     * Get user list
     *
     * @param page Page number
     * @param size Page size
     * @return User list
     */
    @GetMapping
    public List<User> listUsers(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        // ...
    }

    /**
     * Create user
     *
     * @param user User info
     * @return Created user
     */
    @PostMapping
    public User createUser(@RequestBody User user) {
        // ...
    }
}
```

## Configuration

Use the following rules to customize Spring Boot API documentation generation:

```properties
class.is.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController")
class.prefix.path=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value("value")
```
