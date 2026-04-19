# field.name

Set the field name in API documentation.

## Usage

```properties
field.name=groovy:it.ann("com.fasterxml.jackson.annotation.JsonProperty")?.value("value") ?: it.name()
```

This rule allows you to customize the field name, for example to use Jackson's `@JsonProperty` annotation.
