# 如何转换类型

你可以使用 `json.rule.convert` 规则将一种类型转换为另一种类型。

## 用法

```properties
# 将 Date 转换为 String
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

## 常用转换

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDateTime" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDate" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.math.BigDecimal" => java.lang.Double
```

## 自定义类型转换

```properties
# 将自定义类型转换为 Map
json.rule.convert=groovy:it.type().name()=="com.example.CustomObject" => java.util.Map
```

详见 [json.rule.convert](/zh/settings/rules/json_rule_convert)。
