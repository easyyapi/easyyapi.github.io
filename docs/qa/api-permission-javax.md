# How to declare API permission (javax.annotation.security)

You can use `javax.annotation.security` annotations to declare API permissions.

## Supported annotations

- `@RolesAllowed` — specifies the roles allowed to access the API
- `@PermitAll` — allows access by all roles
- `@DenyAll` — denies access by all roles

## Example

```java
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @RolesAllowed("ADMIN")
    @GetMapping("/users")
    public List<User> listUsers() {}

    @PermitAll
    @GetMapping("/public")
    public String publicApi() {}
}
```

## Configuration

EasyYapi automatically extracts permission information from these annotations and includes it in the API documentation.
