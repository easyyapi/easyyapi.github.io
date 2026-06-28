# Enable javax.validation groups

By default, EasyYapi marks a field as required whenever `@NotNull` / `@NotBlank` / `@NotEmpty` is present — **regardless of the `groups` attribute**. To make the `required` flag respect validation groups (so a field is required only for the group(s) actually used by the API call), you need to:

1. Enable the **`javax-validation-strict`** extension (disabled by default).
2. Annotate the API parameter with Spring's `@Validated`, optionally specifying the group class(es).

## Enabling the strict extension

In **Settings → EasyApi → Extensions**, tick **`javax-validation-strict`**. The extension ships with the rules below (you do **not** need to add them yourself):

```properties
# Triggered only when the parameter carries @Validated.
# The active group is stored in session for the duration of the parameter parsing.
param.before=groovy:```
    if(!it.hasAnn("org.springframework.validation.annotation.Validated")){
        return
    }
    session.set("json-group", it.annValue("org.springframework.validation.annotation.Validated")
        ?: helper.findClass("javax.validation.groups.Default"))
```
param.after=groovy:```
    session.remove("json-group")
```
```

For each `@NotNull` / `@NotBlank` / `@NotEmpty` field, the extension checks whether the field's `groups` overlap with the active group from `@Validated`. If they do not overlap, the field is **not** marked as required.

## Example

```java
public class User {

    @NotNull(groups = Update.class)
    private Long id;

    @NotBlank(groups = {Create.class, Update.class})
    private String name;

    @Email(groups = {Create.class, Update.class})
    private String email;

    @Size(min = 6, max = 20, groups = Create.class)
    private String password;
}
```

```java
@RestController
@RequestMapping("/users")
public class UserController {

    // Only Create-group constraints apply → id is NOT required.
    @PostMapping
    public User create(@Validated(Create.class) @RequestBody User user) { ... }

    // Only Update-group constraints apply → password is NOT required.
    @PutMapping("/{id}")
    public User update(@Validated(Update.class) @RequestBody User user) { ... }
}
```

## Resulting required flags

- `create` (group = `Create`): `name` (required), `email` (required), `password` (6–20 chars). `id` is **not** required.
- `update` (group = `Update`): `id` (required), `name` (required), `email` (required). `password` is **not** required.

> **Note:** Without `@Validated` on the parameter, the strict extension leaves `required` untouched — fields are **not** marked as required. This is intentional: only APIs that explicitly opt in via `@Validated` get group-aware validation.

For Jakarta Validation (`jakarta.validation.*`), enable the **`jakarta-validation-strict`** extension instead. See [javax.validation](/framework/javax-validation) for the basic (non-grouped) behaviour.
