# json.rule.convert

Type conversion during JSON serialization.

This is one of the most commonly used rules. It allows you to convert one type to another during JSON serialization.

## Usage

```properties
# Convert Date to String
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String

# Convert custom type to Map
json.rule.convert=groovy:it.type().name()=="com.example.CustomObject" => java.util.Map
```

## Common Conversions

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDateTime" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDate" => java.lang.String
```
