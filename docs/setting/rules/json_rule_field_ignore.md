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