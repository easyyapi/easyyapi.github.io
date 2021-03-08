# method.additional.header

- API需要额外的`header`

### 如JWT, 所有的接口都需要在header中携带token

```properties
method.additional.header={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
```

### 如果需要针对指定包下添加header
```properties
method.additional.header[groovy:it.containingClass().name().startsWith("com.test.api")]={name: "Authorization",value: "",desc: "认证Token",required:true}
```
同理如果指定包下不需要添加header则取反就行了
```properties
method.additional.header[groovy:!it.containingClass().name().startsWith("com.test.api")]={name: "Authorization",value: "",desc: "认证Token",required:true}
```
如果要添加多个header
```properties

# 不支持此写法 method.additional.header[groovy:it.containingClass().name().startsWith("com.test.api")]=[{name: "a",value: "",desc: "",required:true},{name: "b",value: "",desc: "",required:true}]

# 写两遍就行了
method.additional.header[groovy:it.containingClass().name().startsWith("com.test.api")]={name: "a",value: "",desc: "",required:true}
method.additional.header[groovy:it.containingClass().name().startsWith("com.test.api")]={name: "b",value: "",desc: "",required:true}
```
参考 [请教如何给某个包下的方法增加自定义header #379](https://github.com/tangcent/easy-yapi/issues/379)


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
method.additional.header[!@com.itangcent.common.annotation.Public]={name: "Authorization",value: "",desc: "认证Token",required:true}
```

- 等价于

```properties
method.additional.header[groovy:!it.hasAnn("com.itangcent.common.annotation.Public")]={name: "Authorization",value: "",desc: "认证Token",required:true}
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
