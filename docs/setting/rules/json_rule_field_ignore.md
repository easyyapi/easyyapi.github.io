# json.rule.field.ignore

- 忽略字段(设置某些字段不出现在json中,或不需要请求时给出)


### 默认推荐配置

```properties
#Support for Jackson annotations
json.rule.field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value

#Support for Gson annotations
json.rule.field.ignore=!@com.google.gson.annotations.Expose#serialize
```

### demo

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

    public Long getShouldNotIgnoreForGson() {
        return shouldNotIgnoreForGson;
    }

    public void setShouldNotIgnoreForGson(Long shouldNotIgnoreForGson) {
        this.shouldNotIgnoreForGson = shouldNotIgnoreForGson;
    }

    public Long getShouldIgnoreForGson() {
        return shouldIgnoreForGson;
    }

    public void setShouldIgnoreForGson(Long shouldIgnoreForGson) {
        this.shouldIgnoreForGson = shouldIgnoreForGson;
    }

    public Long getShouldNotIgnoreForJackson() {
        return shouldNotIgnoreForJackson;
    }

    public void setShouldNotIgnoreForJackson(Long shouldNotIgnoreForJackson) {
        this.shouldNotIgnoreForJackson = shouldNotIgnoreForJackson;
    }

    public Long getShouldIgnoreForJackson() {
        return shouldIgnoreForJackson;
    }

    public void setShouldIgnoreForJackson(Long shouldIgnoreForJackson) {
        this.shouldIgnoreForJackson = shouldIgnoreForJackson;
    }
}
```

### 定制化配置示例

- 忽略指定名称的字段:

  - 配置如下

    ```properties
    # ignore field 'log'
    json.rule.field.ignore=log
    ```

  - 将忽略如下字段

    ```java
    private String log;
    ```

- 忽略指定类型的字段:

  - 配置如下

    ```properties
    # ignore field 'log' typed xxx.xxx.Log
    json.rule.field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
    ```

  - 将忽略如下字段
  
    ```java
    private Log xxx;
    ```

- 忽略指定`modifier`的字段:

  - 配置如下
    ```properties
    #ignore transient field
    json.rule.field.ignore=groovy:it.hasModifier("transient")||it.hasModifier("protected")
    ```

  - 将忽略如下字段
  
    ```java
    private transient Int xxx;
    protected Long yyy;
    ```