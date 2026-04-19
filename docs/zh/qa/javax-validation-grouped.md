# 启用 javax.validation 分组验证

EasyYapi 可以处理 javax.validation 分组，以显示不同场景下的不同验证约束。

## 配置

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```

## 示例

```java
public class User {
    @NotNull(groups = Update.class)
    private Long id;

    @NotBlank(groups = {Create.class, Update.class})
    private String name;

    @Email(groups = {Create.class, Update.class})
    private String email;

    @Size(min = 6, max = 20, groups = Create.class)
    private String password;
}
```

## 验证分组

- **Create 分组**：`name`（必填）、`email`（必填）、`password`（6-20 字符）
- **Update 分组**：`id`（必填）、`name`（必填）、`email`（必填）

详见 [javax.validation](/zh/framework/javax-validation)。
