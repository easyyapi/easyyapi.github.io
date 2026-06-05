# api.tag

设置 API 标签。

## 用法

```properties
api.tag=#tag
```

值可以是：
- Javadoc 标签名（如 `#tag`）
- Groovy 脚本（如 `groovy:it.containingClass().hasAnn("java.lang.Deprecated") ? "deprecated" : null`）
- 静态字符串（如 `deprecated`）

多条 `api.tag` 规则会合并（去重）。

## 示例

```java
/**
 * Get user list
 * @tag user
 * @tag list
 */
@GetMapping("/users")
public List<User> listUsers() {}
```

使用 `api.tag=#tag`，API 标签将为 "user" 和 "list"。
