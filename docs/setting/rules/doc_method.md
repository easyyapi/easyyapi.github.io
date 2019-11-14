# doc.method

- 字段的额外注释


### 默认推荐配置

```properties
#deprecated info(java)
doc.method[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
doc.method[@java.lang.Deprecated]=「已废弃」

doc.method[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「已废弃」" + it.containingClass().doc("deprecated")
doc.method[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「已废弃」


#deprecated info(kotlin)
doc.method[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")
doc.method[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「已废弃」 " + it.containingClass().ann("kotlin.Deprecated","message")

```

### 添加对swagger @ApiOperation支持

```properties
doc.method=@io.swagger.annotations.ApiOperation#value
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