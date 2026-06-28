# Field with multiple types

Some fields can hold different types depending on context (e.g. `Object data` that is sometimes a `User`, sometimes a `List<User>`). EasyYapi does not have a `field.type` rule — use `json.rule.convert` to rewrite the field's type, or override the return type at the method level.

## Convert a specific type to another

Use [`json.rule.convert`](../settings/rules/json_rule_convert) to replace a type with a different one. The left side matches the type name; the right side is the replacement canonical name:

```properties
# Treat DynamicField as Object
json.rule.convert=groovy:it.type().name()=="com.example.DynamicField" => java.lang.Object

# Treat a raw Map field as a concrete DTO
json.rule.convert=groovy:it.type().name()=="java.util.Map" && it.name()=="data" && it.containingClass().name()=="com.example.Response" => com.example.User
```

## Conditional conversion with filters

`json.rule.convert` accepts filters so the rule only fires for specific fields:

```properties
# Only convert the "data" field of Response
json.rule.convert[groovy:it.containingClass().name()=="com.example.Response" && it.name()=="data"]=groovy:"com.example.User"
```

## Override the response type

If the field is the entire response payload (e.g. `Response<Object>` where `Object` should be `User`), override the return type with [`method.return`](./multiple-return-types):

```properties
method.return=groovy:"com.example.Response<com.example.User>"
```

## Example

```java
public class Response<T> {
    private T data;
    private int code;
    private String message;
}

// Method returns Response<User> — EasyYapi expands `data` as User automatically.
@GetMapping("/user/{id}")
public Response<User> getUser(@PathVariable Long id) {}
```
