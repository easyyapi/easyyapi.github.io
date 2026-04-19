# Gson

EasyYapi 支持 Gson 注解进行字段名映射和序列化控制。

## 扩展配置

```properties
# Gson 支持（当 com.google.gson.annotations.SerializedName 在类路径上时默认启用）
field.name=@com.google.gson.annotations.SerializedName#value
field.ignore=!@com.google.gson.annotations.Expose#serialize
```

## 支持的注解

| 注解 | 规则 | 说明 |
|-----|------|------|
| `@SerializedName` | `field.name` | 使用指定名称代替字段名 |
| `@Expose` | `field.ignore` | 忽略 `serialize=false` 的字段 |

## 示例

```java
public class User {
    @SerializedName("user_name")
    private String name;

    @Expose(serialize = false)
    private String password;
}
```

在此示例中，`name` 将被记录为 `user_name`，`password` 将被忽略。
