# javax.validation

EasyYapi supports javax.validation (Bean Validation) specification and can automatically extract validation constraint information to include in API documentation.

## Supported Annotations

### Null Checks

- `@NotNull` — Cannot be null
- `@NotBlank` — Cannot be blank
- `@NotEmpty` — Cannot be empty

### Numeric Checks

- `@Min` — Minimum value
- `@Max` — Maximum value
- `@DecimalMin` — Minimum decimal
- `@DecimalMax` — Maximum decimal
- `@Positive` — Positive number
- `@PositiveOrZero` — Positive or zero
- `@Negative` — Negative number
- `@NegativeOrZero` — Negative or zero

### String Checks

- `@Size` — Size range
- `@Length` — Length range
- `@Pattern` — Regex pattern
- `@Email` — Email format

### Date Checks

- `@Past` — Past date
- `@PastOrPresent` — Past or present date
- `@Future` — Future date
- `@FutureOrPresent` — Future or present date

### Other

- `@Valid` — Cascading validation

## Example

```java
public class CreateUserRequest {

    @NotBlank(message = "Username cannot be empty")
    @Size(min = 2, max = 20, message = "Username must be 2-20 characters")
    private String username;

    @NotBlank(message = "Password cannot be empty")
    @Size(min = 6, max = 20, message = "Password must be 6-20 characters")
    private String password;

    @Email(message = "Invalid email format")
    private String email;

    @Min(value = 0, message = "Age cannot be negative")
    @Max(value = 150, message = "Age cannot exceed 150")
    private Integer age;
}
```

## Configuration

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank") || it.hasAnn("javax.validation.constraints.NotEmpty")
```
