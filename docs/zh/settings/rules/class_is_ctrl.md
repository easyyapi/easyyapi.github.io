# ~~class.is.ctrl~~

::: danger
此规则已废弃，请使用 [class.is.spring.ctrl](./class_is_spring_ctrl) 代替。`class.is.ctrl` 现在是 `class.is.spring.ctrl` 的别名。
:::

判断一个类是否为 API 控制器。

## 用法

```properties
class.is.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController")
```

默认情况下，EasyYapi 会将标注了 Spring、Feign 或 JAX-RS 注解的类识别为控制器。你可以使用此规则自定义识别逻辑。
