# 如何忽略 API

你可以使用 `ignore` 规则从文档中排除特定的 API。

## 按注解忽略

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")
```

## 按自定义注解忽略

```properties
ignore=groovy:it.hasAnn("com.example.IgnoreApi")
```

## 按方法名忽略

```properties
ignore=groovy:it.name().startsWith("internal")
```

## 示例

```java
/**
 * @deprecated 使用 getUserV2 替代
 */
@GetMapping("/user/{id}")
@Deprecated
public User getUser(@PathVariable Long id) {
    // 此 API 将被忽略
}
```
