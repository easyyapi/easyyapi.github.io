# folder.name

> 用于设置API所属文件夹的名称  
> 与[module](module.md)的区别：module用于更高层分组(对应YAPI中的项目，需要token)，而folder.name仅用于设置API所属文件夹的名称

> 缺省情况下, 默认使用api所在类作为所属文件夹

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
 * 
 * @folder 可以指定整个类的文件夹名称 
 */
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
     * @folder 可以指定某个方法的文件夹名称
     */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```