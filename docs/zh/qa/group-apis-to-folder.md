# 如何将 API 分组到文件夹

你可以使用 `module` 或 `folder.name` 规则将 API 组织到特定的文件夹中。

## 使用 @module 标签

在类的 Javadoc 中添加 `@module` 标签：

```java
/**
 * 用户管理 API
 *
 * @module user-management
 */
@RestController
@RequestMapping("/api/users")
public class UserController {
    // ...
}
```

## 使用 folder.name 规则

配置 `folder.name` 规则：

```properties
folder.name=groovy:it.doc("module") ?: it.name()
```

## 使用 api.tag 规则

使用 `api.tag` 规则设置用于分组的标签：

```properties
api.tag=groovy:it.doc("tag")
```
