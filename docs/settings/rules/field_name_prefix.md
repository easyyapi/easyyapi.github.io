# field.name.prefix

Set a prefix to prepend to field names in API documentation.

## Usage

```properties
field.name.prefix=groovy:'''
if (!fieldContext) return null
def parentPath = tool.substringBeforeLast(fieldContext.path(),".")
return session.get("field.prefix",parentPath)
'''
```

This is typically used with Jackson's `@JsonUnwrapped` annotation to add prefixes to unwrapped fields.

## See Also

- [field.name](./field_name) — Set field name
- [field.name.suffix](./field_name_suffix) — Set field name suffix
