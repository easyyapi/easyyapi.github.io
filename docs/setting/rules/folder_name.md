# folder.name

- 用于设置API所属文件夹的名称
- 缺省情况下，默认使用api所在类作为所属文件夹

## demo

***配置如下:***

```properties
# read folder name from tag `folder`
folder.name=#folder
```

***使用如下:*** 

```java
/**
* 一些Mock相关的API
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * @folder Mock字符串
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```

默认情况下上述api会归属到文件夹`一些Mock相关的API`,加上注释`@folder Mock字符串`后归属到`Mock字符串`