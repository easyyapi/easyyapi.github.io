# field.name.suffix

设置字段名称的后缀。

## 用法

```properties
field.name.suffix=groovy:'''
if (!fieldContext) return null
def parentPath = tool.substringBeforeLast(fieldContext.path(),".")
return session.get("field.suffix",parentPath)
'''
```

通常与 Jackson 的 `@JsonUnwrapped` 注解配合使用，为展开的字段添加后缀。

## 另见

- [field.name](./field_name) — 设置字段名称
- [field.name.prefix](./properties_prefix) — 设置字段名称前缀
