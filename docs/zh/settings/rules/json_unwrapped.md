# json.unwrapped

控制 Jackson `@JsonUnwrapped` 注解的处理方式。

## 用法

```properties
json.unwrapped=@com.fasterxml.jackson.annotation.JsonUnwrapped
```

启用后，带有 `@JsonUnwrapped` 注解的字段将在 API 文档中被展平到父对象中，与 Jackson 的序列化行为一致。

## 示例

```java
public class User {
    private String name;

    @JsonUnwrapped
    private Address address;
}

public class Address {
    private String street;
    private String city;
}
```

启用 `json.unwrapped` 后，`User` 文档将显示 `name`、`street` 和 `city` 作为扁平字段，而不是嵌套的 `address` 对象。
