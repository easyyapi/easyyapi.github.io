# field.default.value

设置字段的默认值。

## 用法

```properties
field.default.value=groovy:it.ann("javax.validation.constraints.NotNull") != null ? "required" : null
```
