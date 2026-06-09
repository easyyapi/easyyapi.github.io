# api.name

设置 API 名称。

## 用法

```properties
api.name=#name
```

值可以是：
- Javadoc 标签名（如 `#name` 使用 Javadoc 的第一行）
- Groovy 脚本（如 `groovy:it.name()`）
- 静态字符串

## 示例

```java
/**
 * 获取用户列表
 */
@GetMapping("/users")
public List<User> listUsers() {}
```

使用 `api.name=#name`，API 名称将为"获取用户列表"。
