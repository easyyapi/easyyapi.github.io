# properties.prefix

Set the prefix for properties resolution.

## Usage

```properties
properties.prefix=groovy:it.containingClass().name().replace(".", "_") + "_"
```

This rule is used to resolve property placeholders in configuration values.
