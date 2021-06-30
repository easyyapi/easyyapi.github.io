# api.status

- 标记接口`status`

### 默认推荐配置

```properties
#yapi status
api.status[#undone]=undone
api.status[#todo]=undone
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
    * Mock String
    * @undone
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```