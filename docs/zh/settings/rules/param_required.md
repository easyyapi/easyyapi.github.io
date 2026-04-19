# param.required

Set whether a parameter is required.

## Usage

```properties
param.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```
