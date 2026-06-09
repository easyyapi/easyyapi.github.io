# field.required

设置字段是否为必填。

## 用法

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```

标记为必填的字段将在 API 文档中标注。
