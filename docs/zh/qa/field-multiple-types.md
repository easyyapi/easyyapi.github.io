# 多种类型的字段

某些字段可能根据上下文具有不同的类型。EasyYapi 可以使用类型转换规则来处理。

## 使用 json.rule.convert

```properties
json.rule.convert=groovy:it.type().name()=="com.example.DynamicField" => java.lang.Object
```

## 使用 field.type

```properties
field.type=groovy:it.doc("type") ?: it.type().name()
```

## 示例

```java
public class Response {
    /**
     * 响应数据，可以是 User 或 List<User>
     * @type object
     */
    private Object data;
}
```
