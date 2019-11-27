# json.rule.field.name

- 用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)


## 默认推荐配置

```properties
#Support for Jackson annotations
json.rule.field.name=@com.fasterxml.jackson.annotation.JsonProperty#value

#Support for Gson annotations
json.rule.field.name=@com.google.gson.annotations.SerializedName#value
```

## demo

***TestJsonFieldBean.java***

```java
public class TestJsonFieldBean {
    @JsonProperty("a")
    private Long propertyA;

    @SerializedName("b")
    private Long propertyB;

    //constructors...

    //getters...
}
```

### 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| a |	integer | 非必须 |  |  | mock: @natural(0,10000) |
| b | integer | 非必须 |  |  | mock: @natural(0,10000) |
