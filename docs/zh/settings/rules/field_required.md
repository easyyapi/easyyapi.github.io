# field.required

Set whether a field is required.

## Usage

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```

Fields marked as required will be indicated in the API documentation.
