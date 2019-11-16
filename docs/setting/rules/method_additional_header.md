# method.additional.header

- API需要额外的header

### 如JWT, 所有的接口都需要在header中携带token

```properties
method.additional.header={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
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
method.additional.header[!@com.itangcent.common.annotation.Public]={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
```

- 等价于

```properties
method.additional.header[groovy:!it.hasAnn("com.itangcent.common.annotation.Public")]={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
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
    public String apiWithoutToken() {
        return Result.success("no token");
    }

    /**
    * private api
    * Token is required
    */
    @GetMapping("/apiWithToken")
    public String apiWithToken() {
        return Result.success("wow,you got a token");
    }

}
```