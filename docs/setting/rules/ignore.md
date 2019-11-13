# ignore

- 用于忽略class/method，不进行解析
- 注释在class上时,整个类将被忽略
- 注释在method上时,当前方法将被忽略


### 默认推荐配置
```properties
ignore=#ignore
```

### demo

* 在类上注释@ignore忽略当前类

```java
/**
* Mock Apis
*
* @ignore
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {
}
```

* 在方法上注释@ignore忽略当前API

```java
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
        * Mock String
        * @ignore
        */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```