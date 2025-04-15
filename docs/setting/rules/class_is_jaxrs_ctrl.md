# class.is.jaxrs.ctrl

> 默认的只会导出注解有`javax.ws.rs.Path`或`jakarta.ws.rs.Path`
的类中的`api`.

> 当有导出未注解`javax.ws.rs.Path`或`jakarta.ws.rs.Path`
的类中的`api`的需求时,可以配置此规则


## 允许导出所有类中的`api`

- 则可配置

 ```properties
 class.is.jaxrs.ctrl=true
 ```

---

## 允许导出注释有`jaxrs_ctrl`类中的`api`

- 如果配置为`导出所有类中的api`出现卡顿, 希望通过注释`@jaxrs_ctrl`来控制哪些类会包含`api`, 那可配置为

 ```properties
 class.is.jaxrs.ctrl=#jaxrs_ctrl
 ```

***Demo***
 
 ```java
 /**
  * @jaxrs_ctrl
  */
public class UserResource {

    /**
     * 获取用户信息
     *
     * @public
     */
    @GET
    @Path("/{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    public UserInfo getUserInfo(@PathParam("userId") Long userId) {
        // 实现代码...
        return userInfo;
    }
}
 ```