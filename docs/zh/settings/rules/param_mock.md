# param.mock

设置 API 参数的 Mock 数据。

## 用法

```properties
param.mock=@mock
```

在 Javadoc 中使用 `@mock` 标签为参数指定 Mock 值：

```java
/**
 * @param name 用户名 @mock admin
 */
@GetMapping("/user")
public User getUser(@RequestParam String name) { ... }
```

## 另见

- [field.mock](./field_mock) — 设置响应字段的 Mock 数据
