# YApi Mock

EasyYapi 支持将字段 Mock 规则同步到 YApi Mock 服务，方便前端开发使用。

## 配置

### 启用 Mock

在配置文件中添加 Mock 规则：

```properties
field.mock=@mock
```

### Mock 规则

在 Javadoc 中使用 `@mock` 标签：

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

    /**
     * 年龄
     * @mock 25
     */
    private Integer age;
}
```

## 常用 Mock 值

| 类型 | Mock 值 | 说明 |
|------|---------|------|
| String | `@string` | 随机字符串 |
| String | `@name` | 随机姓名 |
| String | `@email` | 随机邮箱 |
| String | `@url` | 随机 URL |
| String | `@ip` | 随机 IP |
| Integer | `@integer` | 随机整数 |
| Boolean | `@boolean` | 随机布尔值 |
| Date | `@date` | 随机日期 |
