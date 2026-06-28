# Enable javax.validation groups

EasyYapi can handle javax.validation groups to display different validation constraints in different scenarios.

## Configuration

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```

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

## Validation groups

- **Create group**: `name` (required), `email` (required), `password` (6-20 characters)
- **Update group**: `id` (required), `name` (required), `email` (required)

See [javax.validation](/framework/javax-validation).
