# json.rule.field.name

- 用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)


### 默认推荐配置
```properties
#Support for Jackson annotations
json.rule.field.name=@com.fasterxml.jackson.annotation.JsonProperty#value

#Support for Gson annotations
json.rule.field.name=@com.google.gson.annotations.SerializedName#value
```

### demo
```java
public class TestJsonFieldBean {
    @JsonProperty("a")
    private Long propertyA;

    @SerializedName("b")
    private Long propertyB;

    public Long getPropertyA() {
        return propertyA;
    }

    public void setPropertyA(Long propertyA) {
        this.propertyA = propertyA;
    }

    public Long getPropertyB() {
        return propertyB;
    }

    public void setPropertyB(Long propertyB) {
        this.propertyB = propertyB;
    }
}
```