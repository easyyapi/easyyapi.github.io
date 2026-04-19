# Jackson

EasyYapi supports Jackson annotations for JSON serialization customization.

## Supported Annotations

### Field Name

- `@JsonProperty` — Custom field name
- `@JsonNaming` — Naming strategy

### Field Ignore

- `@JsonIgnore` — Ignore a field
- `@JsonIgnoreProperties` — Ignore multiple fields

### Type Handling

- `@JsonFormat` — Date/time format
- `@JsonDeserialize` / `@JsonSerialize` — Custom serializer

### Inclusion

- `@JsonInclude` — Include strategy

## Example

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

## Configuration

Use the following rules to customize Jackson integration:

- [json.rule.convert](/settings/rules/json_rule_convert) — Type conversion
- [json.rule.enum.convert](/settings/rules/json_rule_enum_convert) — Enum conversion
- [field.ignore](/settings/rules/field_ignore) — Field ignoring
