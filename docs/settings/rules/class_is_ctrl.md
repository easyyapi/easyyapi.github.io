# ~~class.is.ctrl~~

::: danger
This rule is deprecated. Use [class.is.spring.ctrl](./class_is_spring_ctrl) instead. `class.is.ctrl` is now an alias for `class.is.spring.ctrl`.
:::

Determine if a class is an API controller.

## Usage

```properties
class.is.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController")
```

By default, EasyYapi recognizes classes annotated with Spring, Feign, or JAX-RS annotations as controllers. You can use this rule to customize the recognition logic.
