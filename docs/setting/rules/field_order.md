# field.order

> 返回一个int值, 用于设置字段在结果中的顺序  
  
注意: 优先级低于[field.order.with](field_order_with.md)，一般不建议同时使用。


## 推荐配置中能找到一些field.order相关的配置

1. 通过字段上注释顺序

```properties
field.order=#order
```

2. 通过JsonProperty设置顺序
```properties
field.order=@com.fasterxml.jackson.annotation.JsonProperty#index
```

## demo

***在推荐配置中选中***

```
field.order=@com.fasterxml.jackson.annotation.JsonProperty#index
```

***TestJsonFieldBean.java***

```java
public class TestJsonFieldBean {
    @JsonProperty(value = "a", index = 99)
    private Long propertyA;

    private Long propertyB;

    @JsonProperty(value = "c", index = 0)
    private Long propertyC;
    //constructors...

    //getters...
}
```

### 作为API返回值导出:

| 名称 | 类型 |
| --- | --- |
| c |	integer |
| propertyB | integer | 
| a | integer |