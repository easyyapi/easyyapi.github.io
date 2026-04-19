# field.name.prefix

设置字段名称的前缀。

## 用法

```properties
field.name.prefix=groovy:'''
if (!fieldContext) return null
def parentPath = tool.substringBeforeLast(fieldContext.path(),".")
return session.get("field.prefix",parentPath)
'''
```

通常与 Jackson 的 `@JsonUnwrapped` 注解配合使用，为展开的字段添加前缀。

## 另见

- [field.name](./field_name) — 设置字段名称
- [field.name.suffix](./field_name_suffix) — 设置字段名称后缀
