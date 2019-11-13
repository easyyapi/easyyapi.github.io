# param.required

- 用于标记API参数是否为必须(即不可为空)

### 默认推荐配置
```properties
#Support for javax.validation annotations
param.required=@javax.validation.constraints.NotBlank
field.required=@"javax.validation.constraints.NotBlank
param.required=@"javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
field.required=@javax.validation.constraints.NotEmpty
```

### 添加对swagger @ApiParam支持
```properties
param.required=@io.swagger.annotations.ApiParam#required
```

### demo
```java
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    * @ignore
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock")  long seed) {
        return Result.success("mock string");
    }

}
```