# class.is.feign.ctrl

> 默认的只会导出注解有`org.springframework.cloud.openfeign.FeignClient`或`org.springframework.cloud.netflix.feign.FeignClient`
的类中的`api`.

> 当有导出未注解`org.springframework.cloud.openfeign.FeignClient`或`org.springframework.cloud.netflix.feign.FeignClient`
的类中的`api`的需求时,可以配置此规则


## 允许导出所有类中的`api`

- 则可配置

 ```properties
 class.is.feign.ctrl=true
 ```

---

## 允许导出注释有`feign_ctrl`类中的`api`

- 如果配置为`导出所有类中的api`出现卡顿, 希望通过注释`@feign_ctrl`来控制哪些类会包含`api`, 那可配置为

 ```properties
 class.is.feign.ctrl=#feign_ctrl
 ```

***Demo***
 
 ```java
 /**
  * @feign_ctrl
  */
public interface UserClient {

    /**
     * 获取用户信息
     *
     * @public
     */
    @RequestMapping(value = "/user/{userId}", method = RequestMethod.GET)
    UserInfo getUserInfo(@PathVariable("userId") Long userId);
}
 ``` 