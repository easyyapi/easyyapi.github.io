# field.name.suffix

Set a suffix to append to field names in API documentation.

## Usage

```properties
field.name.suffix=groovy:'''
if (!fieldContext) return null
def parentPath = tool.substringBeforeLast(fieldContext.path(),".")
return session.get("field.suffix",parentPath)
'''
```

This is typically used with Jackson's `@JsonUnwrapped` annotation to add suffixes to unwrapped fields.

## See Also

- [field.name](./field_name) — Set field name
- [field.name.prefix](./field_name_prefix) — Set field name prefix
