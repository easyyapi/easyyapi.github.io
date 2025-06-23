# module

此规则用于API分组, 当无配置生效时, 默认使用当前模块/项目名  
> 与[folder.name](folder_name.md)的区别：module用于更高层分组(对应YAPI中的项目，需要token)，而folder.name用于设置API所属文件夹的名称  
导出`postman`时,将为每个`module`创建一个文件夹  
导出`yapi`时,每个`module`对应`yapi`中的一个项目  
> 注意：`module`规则可以同时应用于类和方法级别


### 默认推荐配置

```properties
module=#module
```

### 类级别使用

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

### 方法级别使用

```java
/**
* 公开API
*
* @module OpenApis
*/
@Public
@GetMapping("/public-api")
public String publicApi() {
    return "public data";
}
```

### 配置特定条件的API

```properties
# 将有@Public注解的API分组到"OpenApis"
module[@xxx.xxx.Public]=OpenApis
```
