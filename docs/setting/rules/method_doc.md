# method.doc(doc.method)

- 方法(API)的额外注释


### 默认推荐配置

```properties
#deprecated info(java)
method.doc[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
method.doc[@java.lang.Deprecated]=「已废弃」

method.doc[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「已废弃」" + it.containingClass().doc("deprecated")
method.doc[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「已废弃」


#deprecated info(kotlin)
method.doc[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")
method.doc[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「已废弃」 " + it.containingClass().ann("kotlin.Deprecated","message")

```

### 添加对swagger @ApiOperation支持

```properties
method.doc=@io.swagger.annotations.ApiOperation#value
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
    @ApiOperation(value = "mock string")
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```