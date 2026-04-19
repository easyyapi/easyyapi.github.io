# param.max.depth

Set the maximum recursion depth for parameter resolution.

## Usage

```properties
param.max.depth=5
```

When a parameter type contains circular references or deeply nested structures, this rule limits how deep the resolver will traverse. Parameters beyond the max depth will be resolved as their simple type name.

## Default

No limit (resolves all nested parameters).

## See Also

- [field.max.depth](./field_max_depth) — Max depth for fields
