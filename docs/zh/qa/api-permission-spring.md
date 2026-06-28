# 如何声明 API 权限 (Spring Security)

EasyYapi **没有**内置对 Spring Security 注解（`@PreAuthorize`、`@PostAuthorize`、`@Secured`、`@RolesAllowed`）的提取。要让这些信息出现在 API 文档中，需要编写自定义规则读取注解，并写入 `api.tag`、`api.status` 或 `method.doc`。

## 建议规则

```properties
# 把 @PreAuthorize 表达式输出为形如 "auth:hasRole('ADMIN')" 的标签
api.tag[@org.springframework.security.access.prepost.PreAuthorize]=groovy:"auth:" + it.annValue("org.springframework.security.access.prepost.PreAuthorize")

# 把 @Secured 角色输出为形如 "auth:secured:ADMIN" 的标签
api.tag[@org.springframework.security.access.annotation.Secured]=groovy:"auth:secured:" + it.annValue("org.springframework.security.access.annotation.Secured")

# 在方法描述里追加一行
method.doc[@org.springframework.security.access.prepost.PreAuthorize]=groovy:"Pre-authorize: " + it.annValue("org.springframework.security.access.prepost.PreAuthorize")
```

> `[...]` 中的过滤器让规则只在该注解存在时生效。`api.tag` 是 `MERGE_DISTINCT` 模式，多条 `api.tag` 规则会累加。

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

应用上述规则后，`listUsers` 会带上 `auth:hasRole('ADMIN')` 标签，`getUser` 会带上 `auth:hasAuthority('user:read')` 标签，并且两个方法都会多出一行描述。
