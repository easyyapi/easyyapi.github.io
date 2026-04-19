# 如何声明 API 权限 (javax.annotation.security)

你可以使用 `javax.annotation.security` 注解声明 API 权限。

## 支持的注解

- `@RolesAllowed` — 指定允许访问 API 的角色
- `@PermitAll` — 指定允许所有角色访问
- `@DenyAll` — 指定拒绝所有角色访问

## 示例

```java
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @RolesAllowed("ADMIN")
    @GetMapping("/users")
    public List<User> listUsers() {}

    @PermitAll
    @GetMapping("/public")
    public String publicApi() {}
}
```

## 配置

EasyYapi 会自动从这些注解中提取权限信息并包含在 API 文档中。
