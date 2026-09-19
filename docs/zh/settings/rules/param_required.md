# param.required

设置参数是否为必填。

## 解析顺序

必填性按三层链解析——**显式规则始终优先，无规则命中时框架语义才会生效**：

```
param.required 规则  >  框架注解  >  框架默认值
```

中间那一层使得框架语义无需编写规则即可生效。对 Spring MVC 而言，`@RequestParam`、`@RequestHeader`、`@CookieValue`、`@PathVariable` 和 `@RequestPart` 默认是必填的，除非显式声明了 `required = false`、提供了 `defaultValue`，或类型为 `Optional`。没有绑定注解的参数（包括 `@ModelAttribute`）沿用 Spring 自身的默认值，保持非必填。

父类方法上的注解同样有效，因此接口方法上的 `@RequestParam(required = false)` 对其实现类依然生效。

模型字段上使用 `field.required` 可获得相同语义。

## 用法

```properties
param.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```
