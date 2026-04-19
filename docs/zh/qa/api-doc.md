# 如何设置 API/文件夹名称和描述

你可以使用 Javadoc 和配置规则自定义 API 和文件夹的名称和描述。

## API 名称

使用 Javadoc 第一行作为 API 名称：

```java
/**
 * 根据ID获取用户
 */
@GetMapping("/{id}")
public User getUser(@PathVariable Long id) {}
```

或使用 `api.name` 规则：

```properties
api.name=groovy:it.doc("apiName") ?: it.comment()
```

## API 描述

完整的 Javadoc 注释（不含标签）将作为 API 描述。

## 文件夹名称

使用 `@module` 标签：

```java
/**
 * 用户管理 API
 *
 * @module user-management
 */
@RestController
public class UserController {}
```

或使用 `folder.name` 规则：

```properties
folder.name=groovy:it.doc("module") ?: it.name()
```
