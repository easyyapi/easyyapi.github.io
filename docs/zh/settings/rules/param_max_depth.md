# param.max.depth

设置参数解析的最大递归深度。

## 用法

```properties
param.max.depth=5
```

当参数类型包含循环引用或深度嵌套结构时，此规则限制解析器遍历的深度。超过最大深度的参数将以其简单类型名解析。

## 默认值

无限制（解析所有嵌套参数）。

## 另见

- [field.max.depth](./field_max_depth) — 字段的最大深度
