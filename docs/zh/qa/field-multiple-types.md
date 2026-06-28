# 多种类型的字段

某些字段会根据上下文持有不同类型（例如 `Object data`，有时是 `User`，有时是 `List<User>`）。EasyYapi 没有 `field.type` 规则——请用 `json.rule.convert` 改写字段类型，或在方法层面覆盖返回类型。

## 把某个类型转换为另一个类型

用 [`json.rule.convert`](../settings/rules/json_rule_convert) 把一个类型替换为另一个。左侧匹配类型名，右侧是替换后的完整类名：

```properties
# 把 DynamicField 当作 Object
json.rule.convert=groovy:it.type().name()=="com.example.DynamicField" => java.lang.Object

# 把原始 Map 字段当作具体 DTO
json.rule.convert=groovy:it.type().name()=="java.util.Map" && it.name()=="data" && it.containingClass().name()=="com.example.Response" => com.example.User
```

## 带过滤器的条件转换

`json.rule.convert` 支持过滤器，让规则只对特定字段生效：

```properties
# 只转换 Response 的 "data" 字段
json.rule.convert[groovy:it.containingClass().name()=="com.example.Response" && it.name()=="data"]=groovy:"com.example.User"
```

## 覆盖响应类型

如果该字段就是整个响应载荷（例如 `Response<Object>`，而 `Object` 应当是 `User`），用 [`method.return`](./multiple-return-types) 覆盖返回类型：

```properties
method.return=groovy:"com.example.Response<com.example.User>"
```

## 示例

```java
public class Response<T> {
    private T data;
    private int code;
    private String message;
}

// 方法返回 Response<User>——EasyYapi 会自动把 `data` 展开为 User。
@GetMapping("/user/{id}")
public Response<User> getUser(@PathVariable Long id) {}
```
