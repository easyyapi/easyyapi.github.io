# json.rule.convert

JSON 序列化时的类型转换。

这是最常用的规则之一，允许你在 JSON 序列化过程中将一种类型转换为另一种类型。

## 用法

```properties
# 将 Date 转换为 String
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String

# 将自定义类型转换为 Map
json.rule.convert=groovy:it.type().name()=="com.example.CustomObject" => java.util.Map
```

## 常见转换

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDateTime" => java.lang.String
json.rule.convert=groovy:it.type().name()=="java.time.LocalDate" => java.lang.String
```
