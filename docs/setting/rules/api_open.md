# api.open

> 可用上下文`it`为: [method](../tools/it.html)

> 标记接口是否公开

### demo

***配置如下:***

```properties
api.open=#open
```

***使用如下:*** 

```java
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    * @open
    */
    @ApiOperation(value = "mock string", opens = {"swagger", "test"})
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```
