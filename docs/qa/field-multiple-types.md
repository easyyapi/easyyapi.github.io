# Field with multiple types

Some fields may have different types depending on context. EasyYapi can handle this using type conversion rules.

## Using json.rule.convert

```properties
json.rule.convert=groovy:it.type().name()=="com.example.DynamicField" => java.lang.Object
```

## Using field.type

```properties
field.type=groovy:it.doc("type") ?: it.type().name()
```

## Example

```java
public class Response {
    /**
     * Response data, can be User or List<User>
     * @type object
     */
    private Object data;
}
```
