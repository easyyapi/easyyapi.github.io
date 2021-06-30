# param.required

- 用于标记API参数是否为必须(即不可为空)

## 默认推荐配置

```properties
#Support for javax.validation annotations
param.required=@javax.validation.constraints.NotBlank
param.required=@"javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
```

## 添加对swagger @ApiParam支持

```properties
param.required=@io.swagger.annotations.ApiParam#required
```

## demo

***MockCtrl.java***

```java
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock", required = true, defaultValue = "666666") long seed) {
        return Result.success("mock string");
    }

}
```

### 导出结果如下:

***请求参数:***

| 参数名称 | 是否必须 |	示例 | 备注 |
| --- | --- | --- | --- |
| seed | 是 | 666666 | seed for mock |