# How to declare API permission (Spring Security)

You can use Spring Security annotations to declare API permissions.

## Supported annotations

- `@PreAuthorize` — pre-authorization check
- `@PostAuthorize` — post-authorization check
- `@Secured` — role-based security
- `@RolesAllowed` — JSR-250 role-based security

## Example

```java
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User> listUsers() {}

    @PreAuthorize("hasAuthority('user:read')")
    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {}
}
```

## Configuration

EasyYapi automatically extracts permission information from these annotations and includes it in the API documentation.
