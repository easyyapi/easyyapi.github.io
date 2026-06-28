# 如何声明 API 权限 (javax.annotation.security)

EasyYapi **没有**内置对 `javax.annotation.security` 注解（`@RolesAllowed`、`@PermitAll`、`@DenyAll`）的提取。要让这些信息出现在 API 文档中，需要编写自定义规则读取注解，并写入 `api.tag`、`api.status` 或 `method.doc`。

## 建议规则

```properties
# 把 @RolesAllowed 输出为形如 "auth:role:ADMIN" 的标签
api.tag[@javax.annotation.security.RolesAllowed]=groovy:"auth:role:" + it.annValue("javax.annotation.security.RolesAllowed")

# 把 @PermitAll / @DenyAll 标记为 api.status
api.status[@javax.annotation.security.PermitAll]=public
api.status[@javax.annotation.security.DenyAll]=disabled

# 或在方法描述里追加一行
method.doc[@javax.annotation.security.RolesAllowed]=groovy:"Required roles: " + it.annValue("javax.annotation.security.RolesAllowed")
```

> `[...]` 中的过滤器让规则只在该注解存在时生效。`api.tag` 是 `MERGE_DISTINCT` 模式，多条 `api.tag` 规则会累加。

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

应用上述规则后，`listUsers` 会带上 `auth:role:ADMIN` 标签，`publicApi` 会被标记为状态 `public`。

> Jakarta EE 9+ 项目请用 `jakarta.annotation.security.*` 替换 `javax.annotation.security.*`。
