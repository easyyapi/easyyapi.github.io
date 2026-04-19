# Fastjson

EasyYapi 支持 Alibaba Fastjson 注解进行字段名映射。

## 扩展配置

```properties
# Fastjson 支持（默认禁用）
field.name=@com.alibaba.fastjson.annotation.JSONField#value
```

::: warning
Fastjson 支持**默认禁用**。如需使用，请在 IDE 设置中启用。
:::

## 支持的注解

| 注解 | 规则 | 说明 |
|-----|------|------|
| `@JSONField` | `field.name` | 使用指定名称代替字段名 |

## 示例

```java
public class User {
    @JSONField(name = "user_name")
    private String name;
}
```

在此示例中，`name` 将被记录为 `user_name`。
