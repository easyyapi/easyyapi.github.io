# field.max.depth

设置字段解析的最大递归深度。

## 用法

```properties
field.max.depth=5
```

当字段类型包含循环引用或深度嵌套结构时，此规则限制解析器遍历的深度。超过最大深度的字段将以其简单类型名解析。

## 默认值

无限制（解析所有嵌套字段）。

## 另见

- [param.max.depth](./param_max_depth) — 参数的最大深度
