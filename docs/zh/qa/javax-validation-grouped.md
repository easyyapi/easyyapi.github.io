# 启用 javax.validation 分组验证

默认情况下，EasyYapi 只要看到 `@NotNull` / `@NotBlank` / `@NotEmpty` 就把字段标记为必填，**忽略 `groups` 属性**。要让 `required` 标记跟随验证分组（只在 API 实际使用的分组下才必填），需要：

1. 启用 **`javax-validation-strict`** 扩展（默认未启用）。
2. 在 API 参数上使用 Spring 的 `@Validated`，可指定分组类。

## 启用 strict 扩展

在 **Settings → EasyApi → Extensions** 中勾选 **`javax-validation-strict`**。该扩展自带以下规则（**无需手动添加**）：

```properties
# 仅当参数带有 @Validated 时触发。
# 将当前生效的分组存入 session，供字段解析期间使用。
param.before=groovy:```
    if(!it.hasAnn("org.springframework.validation.annotation.Validated")){
        return
    }
    session.set("json-group", it.annValue("org.springframework.validation.annotation.Validated")
        ?: helper.findClass("javax.validation.groups.Default"))
```
param.after=groovy:```
    session.remove("json-group")
```
```

对于每个带 `@NotNull` / `@NotBlank` / `@NotEmpty` 的字段，扩展会检查字段的 `groups` 是否与 `@Validated` 指定的分组有交集。如果没有交集，则字段**不会**被标记为必填。

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

```java
@RestController
@RequestMapping("/users")
public class UserController {

    // 只应用 Create 分组的约束 → id 不必填
    @PostMapping
    public User create(@Validated(Create.class) @RequestBody User user) { ... }

    // 只应用 Update 分组的约束 → password 不必填
    @PutMapping("/{id}")
    public User update(@Validated(Update.class) @RequestBody User user) { ... }
}
```

## 结果

- `create`（分组 = `Create`）：`name`（必填）、`email`（必填）、`password`（6–20 字符）。`id` **不必填**。
- `update`（分组 = `Update`）：`id`（必填）、`name`（必填）、`email`（必填）。`password` **不必填**。

> **注意：** 若参数上没有 `@Validated`，strict 扩展会保持 `required` 不变——字段**不会**被标记为必填。这是有意为之：只有显式声明 `@Validated` 的 API 才会启用分组感知的校验。

对于 Jakarta Validation（`jakarta.validation.*`），请改用 **`jakarta-validation-strict`** 扩展。基础（不带分组的）行为详见 [javax.validation](/zh/framework/javax-validation)。
