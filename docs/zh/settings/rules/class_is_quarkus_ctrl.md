# class.is.quarkus.ctrl

判断类是否为 Quarkus/SmallRye 资源类。

## 用法

```properties
class.is.quarkus.ctrl=groovy:it.hasAnn("javax.ws.rs.Path")
```

此规则用于识别 Quarkus REST 端点。启用后，Quarkus 项目中带有 JAX-RS 路径注解的类将被视为 API 控制器。

## 另见

- [class.is.ctrl](./class_is_ctrl) — 通用控制器识别
- [class.is.jaxrs.ctrl](./class_is_jaxrs_ctrl) — JAX-RS 资源识别
