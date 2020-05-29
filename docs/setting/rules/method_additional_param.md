# method.additional.param

- API需要额外的`param`
- 仅适用于url参数,不支持`form`/`body`

### 例如接口都需要在`param`中携带token

```properties
method.additional.param={name: "Authorization",value: "",desc: "认证Token",required:true}
```

### 如果需要排除指定开放的接口不需要token可以这样配置:

- 假定有如下注解:

```java
package com.itangcent.common.annotation;

/**
 * 声明接口为公开接口
 */
@Documented
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Public {
}

```

- 则可如此配置

```properties
method.additional.param[!@com.itangcent.common.annotation.Public]={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
```

- 等价于

```properties
method.additional.param[groovy:!it.hasAnn("com.itangcent.common.annotation.Public")]={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
```


### demo

```java
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * public api
    * Token is not required
    */
    @Public
    @GetMapping("/apiWithoutToken")
    public Result<String> apiWithoutToken() {
        return Result.success("no token");
    }

    /**
    * private api
    * Token is required
    */
    @GetMapping("/apiWithToken")
    public Result<String> apiWithToken() {
        return Result.success("wow,you got a token");
    }

}
```