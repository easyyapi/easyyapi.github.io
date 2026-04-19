# Jakarta Validation

EasyYapi 支持 Jakarta Validation 注解，用于标记字段和参数为必填。

## 扩展配置

```properties
# Jakarta Validation 支持（当 jakarta.validation.constraints.NotNull 在类路径上时默认启用）
param.required=@jakarta.validation.constraints.NotBlank
field.required=@jakarta.validation.constraints.NotBlank
param.required=@jakarta.validation.constraints.NotNull
field.required=@jakarta.validation.constraints.NotNull
param.required=@jakarta.validation.constraints.NotEmpty
field.required=@jakarta.validation.constraints.NotEmpty
```

## 支持的注解

| 注解 | 规则 | 说明 |
|-----|------|------|
| `@NotBlank` | `param.required` / `field.required` | 标记为必填 |
| `@NotNull` | `param.required` / `field.required` | 标记为必填 |
| `@NotEmpty` | `param.required` / `field.required` | 标记为必填 |

## Jakarta Validation 严格模式

还有一个**严格模式**（`jakarta-validation-strict` 扩展），会尊重校验分组。当使用 `@Validated` 指定分组时，只有匹配分组的约束才会生效。

此扩展**默认禁用**。如需基于分组的校验，请在 IDE 设置中启用。

## 示例

```java
public class CreateUserRequest {
    @NotNull
    private String name;

    @Email
    @NotBlank
    private String email;

    @NotEmpty
    private List<String> roles;
}
```

三个字段都将在 API 文档中被标记为必填。
