# field.name

设置 API 文档中的字段名称。

## 用法

```properties
field.name=groovy:it.ann("com.fasterxml.jackson.annotation.JsonProperty")?.value("value") ?: it.name()
```

此规则允许你自定义字段名称，例如使用 Jackson 的 `@JsonProperty` 注解。
