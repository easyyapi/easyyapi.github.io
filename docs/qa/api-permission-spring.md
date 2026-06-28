# How to declare API permission (Spring Security)

EasyYapi does **not** ship built-in extraction for Spring Security annotations (`@PreAuthorize`, `@PostAuthorize`, `@Secured`, `@RolesAllowed`). To surface these in the API documentation, write custom rules that read the annotations and feed them into `api.tag`, `api.status`, or `method.doc`.

## Suggested rules

```properties
# Surface the @PreAuthorize expression as a tag like "auth:hasRole('ADMIN')"
api.tag[@org.springframework.security.access.prepost.PreAuthorize]=groovy:"auth:" + it.annValue("org.springframework.security.access.prepost.PreAuthorize")

# Surface @Secured roles as a tag like "auth:secured:ADMIN"
api.tag[@org.springframework.security.access.annotation.Secured]=groovy:"auth:secured:" + it.annValue("org.springframework.security.access.annotation.Secured")

# Append a line to the method description
method.doc[@org.springframework.security.access.prepost.PreAuthorize]=groovy:"Pre-authorize: " + it.annValue("org.springframework.security.access.prepost.PreAuthorize")
```

> Filters in `[...]` make the rule fire only when the annotation is present. The `api.tag` key is `MERGE_DISTINCT`, so multiple `api.tag` rules accumulate.

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

With the rules above, `listUsers` gets the tag `auth:hasRole('ADMIN')` and `getUser` gets `auth:hasAuthority('user:read')`, and both methods get an extra description line.
