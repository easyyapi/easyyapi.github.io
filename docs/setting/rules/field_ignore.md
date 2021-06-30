# field.ignore

- 忽略字段(设置某些字段不出现在json中,或不需要请求时给出)


## 默认推荐配置

```properties
#Support for Jackson annotations
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value

#Support for Gson annotations
field.ignore=!@com.google.gson.annotations.Expose#serialize
```

## demo

***TestJsonIgnoreBean.java***

```java
public class TestJsonIgnoreBean {

    @Expose(serialize = true)
    private Long shouldNotIgnoreForGson;

    @Expose(serialize = false)
    private Long shouldIgnoreForGson;

    @JsonIgnore(false)
    private Long shouldNotIgnoreForJackson;

    @JsonIgnore
    private Long shouldIgnoreForJackson;

    //constructors...

    //getters...
}
```

### 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| shouldNotIgnoreForGson |	integer | 非必须 |  |  | mock: @natural(0,10000) |
| shouldNotIgnoreForJackson | integer | 非必须 |  |  | mock: @natural(0,10000) |

## 定制化配置示例

- 忽略指定名称的字段:

  - 配置如下

    ```properties
    # ignore field 'log'
    field.ignore=log
    ```

  - 将忽略如下字段

    ```java
    private String log;
    ```

- 忽略指定类型的字段:

  - 配置如下

    ```properties
    # ignore field 'log' typed xxx.xxx.Log
    field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
    ```

  - 将忽略如下字段
  
    ```java
    private Log xxx;
    ```

- 忽略指定`modifier`的字段:

  - 配置如下
    ```properties
    #ignore transient field
    field.ignore=groovy:it.hasModifier("transient")||it.hasModifier("protected")
    ```

  - 将忽略如下字段
  
    ```java
    private transient Int xxx;
    protected Long yyy;
    ```