# How to declare API permission (javax.annotation.security)

EasyYapi does **not** ship built-in extraction for `javax.annotation.security` annotations (`@RolesAllowed`, `@PermitAll`, `@DenyAll`). To surface these in the API documentation, write custom rules that read the annotations and feed them into `api.tag`, `api.status`, or `method.doc`.

## Suggested rules

```properties
# Surface @RolesAllowed as a tag like "auth:role:ADMIN"
api.tag[@javax.annotation.security.RolesAllowed]=groovy:"auth:role:" + it.annValue("javax.annotation.security.RolesAllowed")

# Mark @PermitAll / @DenyAll as an api.status
api.status[@javax.annotation.security.PermitAll]=public
api.status[@javax.annotation.security.DenyAll]=disabled

# Or append a line to the method description
method.doc[@javax.annotation.security.RolesAllowed]=groovy:"Required roles: " + it.annValue("javax.annotation.security.RolesAllowed")
```

> Filters in `[...]` make the rule fire only when the annotation is present. The `api.tag` key is `MERGE_DISTINCT`, so multiple `api.tag` rules accumulate.

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

With the rules above, `listUsers` gets the tag `auth:role:ADMIN` and `publicApi` is marked with status `public`.

> Use `jakarta.annotation.security.*` instead of `javax.annotation.security.*` for Jakarta EE 9+ projects.
