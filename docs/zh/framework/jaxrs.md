# JAX-RS

EasyYapi 支持 JAX-RS (Java API for RESTful Web Services) 规范，包括 Jersey 和 Quarkus 等实现。

## 支持的注解

### 路径注解

- `@Path` — 设置资源路径

### HTTP 方法注解

- `@GET`
- `@POST`
- `@PUT`
- `@DELETE`
- `@PATCH`
- `@HEAD`
- `@OPTIONS`

### 参数注解

- `@PathParam` — 路径参数
- `@QueryParam` — 查询参数
- `@FormParam` — 表单参数
- `@HeaderParam` — 请求头参数
- `@CookieParam` — Cookie 参数
- `@BeanParam` — Bean 参数

### 消费/生产注解

- `@Consumes` — 指定消费的媒体类型
- `@Produces` — 指定生产的媒体类型

## 示例

```java
/**
 * 用户资源
 */
@Path("/users")
@Produces("application/json")
@Consumes("application/json")
public class UserResource {

    /**
     * 获取用户列表
     */
    @GET
    public List<User> listUsers() {
        // ...
    }

    /**
     * 获取用户
     */
    @GET
    @Path("/{id}")
    public User getUser(@PathParam("id") Long id) {
        // ...
    }
}
```

## 配置

```properties
class.is.jaxrs.ctrl=groovy:it.hasAnn("javax.ws.rs.Path")
```
