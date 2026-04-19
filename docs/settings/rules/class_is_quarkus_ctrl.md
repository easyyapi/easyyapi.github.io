# class.is.quarkus.ctrl

Determine whether a class is a Quarkus/SmallRye resource class.

## Usage

```properties
class.is.quarkus.ctrl=groovy:it.hasAnn("javax.ws.rs.Path")
```

This rule is used to recognize Quarkus REST endpoints. When enabled, classes annotated with JAX-RS path annotations in a Quarkus project will be treated as API controllers.

## See Also

- [class.is.ctrl](./class_is_ctrl) — Generic controller recognition
- [class.is.jaxrs.ctrl](./class_is_jaxrs_ctrl) — JAX-RS resource recognition
