# api.name

- 用于设置API名称
- 缺省情况下，默认使用api注释的第一行作为API的名称

## demo

***配置如下:***

```properties
# read api name from tag `api.name`
api.name=#api.name
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
    * @api.name Mock String
    * @undone
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```