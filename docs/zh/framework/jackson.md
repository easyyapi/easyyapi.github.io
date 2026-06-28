# Jackson

EasyYapi 支持 Jackson 注解用于自定义 JSON 序列化。

## 支持的注解

### 字段名称

- `@JsonProperty` — 自定义字段名
- `@JsonNaming` — 命名策略

### 字段忽略

- `@JsonIgnore` — 忽略单个字段
- `@JsonIgnoreProperties` — 忽略多个字段

### 类型处理

- `@JsonFormat` — 日期/时间格式
- `@JsonDeserialize` / `@JsonSerialize` — 自定义序列化器

### 包含策略

- `@JsonInclude` — 包含策略

## 示例

```java
public class User {

    @JsonProperty("user_name")
    private String name;

    @JsonIgnore
    private String password;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdAt;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String nickname;
}
```

## 配置

使用以下规则自定义 Jackson 集成：

- [json.rule.convert](/zh/settings/rules/json_rule_convert) — 类型转换
- [json.rule.enum.convert](/zh/settings/rules/json_rule_enum_convert) — 枚举转换
- [field.ignore](/zh/settings/rules/field_ignore) — 字段忽略
