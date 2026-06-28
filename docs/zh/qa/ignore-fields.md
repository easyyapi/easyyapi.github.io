# 如何忽略字段

使用 `field.ignore` 规则从 API 文档中排除特定字段。

> **内置行为：** 默认启用的 `jackson` 扩展已经通过 `field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value` 自动忽略带 `@JsonIgnore` 的字段。下面的自定义规则只用于**非 Jackson** 场景。

## 按名称忽略

```properties
field.ignore=groovy:it.name() == "password"
```

## 按类型忽略

```properties
field.ignore=groovy:it.type().name().startsWith("org.internal.")
```

## 按自定义注解忽略

```properties
field.ignore=groovy:it.hasAnn("com.example.Internal")
```

## 多条件组合

```properties
field.ignore=groovy:it.name() == "password" || it.type().name().startsWith("org.internal.") || it.hasAnn("com.example.Internal")
```

> 相同 key 的规则会被合并——你自定义的 `field.ignore` 规则会与内置的 Jackson 规则**一起**执行，而不是替换它。任何一条匹配的规则返回 `true`，字段就会被忽略。

## 示例

```java
public class User {
    private String name;

    @JsonIgnore
    private String password;  // 被内置 Jackson 规则忽略

    private String internalState;  // 被自定义的名称/类型规则忽略
}
```

另见 [JsonIgnoreProperties 支持](./json-ignore-properties)，了解通过类级注解忽略多个字段的方式。
