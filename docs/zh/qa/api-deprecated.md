# 如何标记 API 为废弃

你可以使用 Java 的 `@Deprecated` 注解或 Javadoc `@deprecated` 标签来标记 API 为废弃。

## 使用 @Deprecated 注解

```java
/**
 * 根据ID获取用户
 * @deprecated 使用 getUserV2 替代
 */
@Deprecated
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```

## 使用 @deprecated 标签

```java
/**
 * 根据ID获取用户
 *
 * @deprecated 使用 getUserV2 替代
 */
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```

## 配置

使用 `api.status` 规则设置 API 状态：

```properties
api.status=groovy:it.hasAnn("java.lang.Deprecated") ? "deprecated" : "done"
```
