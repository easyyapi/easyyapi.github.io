# param.default.value

- 用于设置API参数的默认值 

### 添加对swagger @ApiParam支持

```properties
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
```

### demo

```java
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock",defaultValue = "666")  long seed) {
        return Result.success("mock string");
    }

}
```