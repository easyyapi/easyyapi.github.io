# api.tag

- 标记接口`tag`

### 默认推荐配置

```properties
#yapi tag
api.tag[@java.lang.Deprecated]=deprecated
api.tag[#deprecated]=deprecated
api.tag[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=deprecated
api.tag[groovy:it.containingClass().hasDoc("deprecated")]=deprecated

#yapi tag for kotlin
api.tag[@kotlin.Deprecated]=deprecated
api.tag[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=deprecated
```

### 添加对swagger @ApiOperation支持

```properties
api.tag=@io.swagger.annotations.ApiOperation#tags
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
    */
    @ApiOperation(value = "mock string", tags = {"swagger", "test"})
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```