# 如何声明 API 权限 (Spring Security)

你可以使用 Spring Security 注解声明 API 权限。

## 支持的注解

- `@PreAuthorize` — 前置授权检查
- `@PostAuthorize` — 后置授权检查
- `@Secured` — 基于角色的安全
- `@RolesAllowed` — JSR-250 基于角色的安全

## 示例

```java
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User> listUsers() {}

    @PreAuthorize("hasAuthority('user:read')")
    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {}
}
```

## 配置

EasyYapi 会自动从这些注解中提取权限信息并包含在 API 文档中。
