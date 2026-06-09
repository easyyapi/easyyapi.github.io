# param.required

设置参数是否为必填。

## 用法

```properties
param.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```
