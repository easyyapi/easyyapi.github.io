# class.doc(doc.class)

- 类上的额外注释
    - 将作为yapi接口分类的描述，但是由于[yapi openapi](https://hellosean1025.github.io/yapi/openapi.html)并未提供`修改分类`的接口,故当分类已存在时, 此配置实质上无法生效

### 添加对swagger @Api支持

```properties
class.doc=@io.swagger.annotations.Api#value
```

### demo

```java
@Api(value = "mock api tools", 
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```