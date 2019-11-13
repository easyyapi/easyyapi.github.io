# module

- 用于API分组
- 当无配置生效时, 默认使用当前模块/项目名
- 导出postman时,将为每个module创建一个文件夹
- 导出yapi时,每个module对应yapi中的一个项目


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