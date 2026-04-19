# Jakarta Validation

EasyYapi supports Jakarta Validation annotations for marking fields and parameters as required.

## Extension Config

```properties
# Jakarta Validation support (enabled by default when jakarta.validation.constraints.NotNull is on classpath)
param.required=@jakarta.validation.constraints.NotBlank
field.required=@jakarta.validation.constraints.NotBlank
param.required=@jakarta.validation.constraints.NotNull
field.required=@jakarta.validation.constraints.NotNull
param.required=@jakarta.validation.constraints.NotEmpty
field.required=@jakarta.validation.constraints.NotEmpty
```

## Supported Annotations

| Annotation | Rule | Description |
|-----------|------|-------------|
| `@NotBlank` | `param.required` / `field.required` | Mark as required |
| `@NotNull` | `param.required` / `field.required` | Mark as required |
| `@NotEmpty` | `param.required` / `field.required` | Mark as required |

## Jakarta Validation Strict

There is also a **strict mode** (`jakarta-validation-strict` extension) that respects validation groups. When using `@Validated` with specific groups, only constraints matching those groups will be applied.

This extension is **disabled by default**. Enable it in IDE settings if you need group-based validation.

## Example

```java
public class CreateUserRequest {
    @NotNull
    private String name;

    @Email
    @NotBlank
    private String email;

    @NotEmpty
    private List<String> roles;
}
```

All three fields will be marked as required in the API documentation.
