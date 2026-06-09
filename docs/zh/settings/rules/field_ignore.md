# field.ignore

在 API 文档中忽略字段。

## 用法

```properties
# 根据注解忽略字段
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# 根据名称忽略字段
field.ignore=groovy:it.name() == "password"
```

## 示例

```java
public class User {
    private String name;

    @JsonIgnore
    private String password;  // 此字段将被忽略
}
```
