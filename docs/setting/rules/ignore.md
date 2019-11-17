# ignore

- 用于忽略`class`/`method`，不进行解析
- 注释在`class`上时,整个类将被忽略
- 注释在`method`上时,当前方法将被忽略


### 默认推荐配置

```properties
ignore=#ignore
```

### demo

* 在类上注释`@ignore`忽略当前类

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

* 在方法上注释`@ignore`忽略当前API

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