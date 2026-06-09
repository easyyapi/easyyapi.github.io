# field.mock

设置字段的 Mock 数据。

## 用法

```properties
field.mock=@mock
field.mock.resolveProperty=true
```

这是最常用的规则之一，用于决定如何为字段生成 Mock 数据。

## 示例

```java
public class User {
    /**
     * 用户名
     * @mock admin
     */
    private String name;

    /**
     * 邮箱
     * @mock user@example.com
     */
    private String email;
}
```

## resolveProperty

当 `field.mock.resolveProperty=true` 时，Mock 值中的属性占位符将被解析。
