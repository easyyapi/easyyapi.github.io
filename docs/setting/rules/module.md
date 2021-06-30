# module

- 用于API分组
- 当无配置生效时, 默认使用当前模块/项目名
- 导出`postman`时,将为每个`module`创建一个文件夹
- 导出`yapi`时,每个`module`对应`yapi`中的一个项目


### 默认推荐配置

```properties
module=#module
```

### demo

```java
/**
* Mock Apis
*
* @module mock
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {
}
```