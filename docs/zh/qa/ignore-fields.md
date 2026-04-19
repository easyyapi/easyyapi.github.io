# 如何忽略字段

你可以使用 `field.ignore` 规则从 API 文档中排除特定字段。

## 按注解忽略

```properties
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")
```

## 按名称忽略

```properties
field.ignore=groovy:it.name() == "password"
```

## 按类型忽略

```properties
field.ignore=groovy:it.type().name().startsWith("org.internal.")
```

## 多条件忽略

```properties
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore") || it.name() == "password" || it.type().name().startsWith("org.internal.")
```

## 示例

```java
public class User {
    private String name;

    @JsonIgnore
    private String password;  // 按注解忽略

    private String internalState;  // 可按名称规则忽略
}
```
