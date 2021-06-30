# class.is.ctrl

- 默认的只会导出注解有`org.springframework.stereotype.Controller`或`org.springframework.web.bind.annotation.RestController`
的类中的`api`.
- 当有导出未注解`org.springframework.stereotype.Controller`或`org.springframework.web.bind.annotation.RestController`
的类中的`api`的需求时,可以配置此规则


## 允许导出所有类中的`api`

- 则可配置

 ```properties
 class.is.ctrl=true
 ```

## 允许导出注释有`ctrl`类中的`api`

- 则可配置

 ```properties
 class.is.ctrl=#ctrl
 ```

***Demo***
 
 ```java
 /**
  * @ctrl
  */
@RequestMapping("/base")
public interface BaseController {

    /**
     * 当前ctrl名称
     *
     * @public
     */
    @RequestMapping("/ctrl/name")
    String ctrlName();
}
 ```