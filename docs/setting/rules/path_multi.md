# path.multi

- 用于当API有多个可用路径时如何处理
- 目前可用策略(策略不区分大小写):

| 可用策略 | 策略描述 |
| ------------ | ------------ |
| FIRST | 选择第一个可用路径 |
| LAST | 选择最后一个可用路径 |
| LONGEST | 选择最长的可用路径 |
| SHORTEST | 选择最短的可用路径 |
| ALL | 为每一个可用路径生成一个api |

***可能的配置如下:***

1. 选择第一个可用路径

```properties
path.multi=first
```

2. 选择最后一个可用路径

```properties
path.multi=last
```

3. 选择最长的可用路径

```properties
path.multi=longest
```

4. 选择最短的可用路径

```properties
path.multi=shortest
```

5. 为每一个可用路径生成一个api

```properties
path.multi=all
```


***也可以由api自行决定选择策略***

```properties
path.multi=#multi
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
    * @multi all
    */
    @GetMapping(value = {"/string", "string2"})
    public String mockString() {
        return Result.success("mock string");
    }
}
```