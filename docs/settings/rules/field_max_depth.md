# field.max.depth

Set the maximum recursion depth for field resolution.

## Usage

```properties
field.max.depth=5
```

When a field type contains circular references or deeply nested structures, this rule limits how deep the resolver will traverse. Fields beyond the max depth will be resolved as their simple type name.

## Default

No limit (resolves all nested fields).

## See Also

- [param.max.depth](./param_max_depth) — Max depth for parameters
