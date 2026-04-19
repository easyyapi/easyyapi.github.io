# 启用 JsonIgnoreProperties 支持

EasyYapi 可以支持 Jackson 的 `@JsonIgnoreProperties` 注解，用于在序列化时忽略特定属性。

## 配置

在配置文件中添加以下规则：

```properties
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore") || it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
```

## 示例

```java
@JsonIgnoreProperties({"internalId", "createdAt"})
public class User {
    private Long id;
    private String name;
    private Long internalId;  // 被忽略
    private Date createdAt;   // 被忽略
}
```

## 注意

对于类级别的 `@JsonIgnoreProperties`，EasyYapi 需要在类级别处理该注解并将其应用于所有匹配的字段。
