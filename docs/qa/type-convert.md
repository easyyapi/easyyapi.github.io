# How to convert type

You can use the `json.rule.convert` rule to convert one type to another.

## Usage

```properties
# Convert Date to String
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

## Common conversions

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDateTime" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDate" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.math.BigDecimal" => java.lang.Double
```

## Custom type conversion

```properties
# Convert a custom type to Map
json.rule.convert=groovy:it.type().name()=="com.example.CustomObject" => java.util.Map
```

See [json.rule.convert](/settings/rules/json_rule_convert).
