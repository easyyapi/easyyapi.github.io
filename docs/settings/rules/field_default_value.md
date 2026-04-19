# field.default.value

Set the default value for a field.

## Usage

```properties
field.default.value=groovy:it.ann("javax.validation.constraints.NotNull") != null ? "required" : null
```
