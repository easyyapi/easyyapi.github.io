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

### 导出效果

- 列表页

| 接口名称 | 接口路径 | 接口分类 | 状态 | tag |
| --- | --- | --- | --- | --- |
| Mock String |	/mock/string | Mock Apis | 已完成 | swagger<br>test |

- 详情页

| **基本信息** |
| ---  |
| 接口名称： Mock String               创 建 人：  admin| 
| 状  态： 已完成                 更新时间：  2019-12-07 22:31:28 | 
| Tag ：    swagger, test | 
| 接口路径： GET /mock/string | 
| Mock地址： http://127.0.0.1:3000/mock/172/mock/string | 

---

# api.tag.delimiter

- 用于分割tags, 默认tag的分隔符是`,\n`
    - 如规则得到的`tag`是`a,b`,则会被切割为[a,b]
    - 如希望`a,b`视为一个规则,可以设置`api.tag.delimiter=\n`,则不再对`,`进行切割
    - 如希望将`a|b|c`切割为[a,b,c],可以设置`api.tag.delimiter=|\n`
    - 如希望将`a,b|c,d`切割为[a,b,c,d],可以设置`api.tag.delimiter=|,\n`