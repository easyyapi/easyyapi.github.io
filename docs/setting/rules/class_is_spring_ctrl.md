# class.is.spring.ctrl

> 默认的只会导出注解有`org.springframework.stereotype.Controller`或
`org.springframework.web.bind.annotation.RestController`
> 的类中的`api`.

> 当有导出未注解`org.springframework.stereotype.Controller`或`org.springframework.web.bind.annotation.RestController`
> 的类中的`api`的需求时,可以配置此规则

## 允许导出所有类中的`api`

- 则可配置

 ```properties
 class.is.spring.ctrl=true
 ```

---

## 允许导出注释有`spring_ctrl`类中的`api`

- 如果配置为`导出所有类中的api`出现卡顿, 希望通过注释`@spring_ctrl`来控制哪些类会包含`api`, 那可配置为

 ```properties
 class.is.spring.ctrl=#spring_ctrl
 ```

***Demo***

 ```java
 /**
  * @spring_ctrl
  */
@RequestMapping("/users")
public class UserController {

    /**
     * 获取用户信息
     *
     * @public
     */
    @RequestMapping("/{userId}")
    public UserInfo getUserInfo(@PathVariable Long userId) {
        // 实现代码...
        return userInfo;
    }
}
 ```