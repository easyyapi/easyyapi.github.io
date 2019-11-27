# field.required

- 用于标记字段是否为必须(即不可为空)

## 默认推荐配置

```properties
#Support for javax.validation annotations
field.required=@"javax.validation.constraints.NotBlank
field.required=@javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotEmpty
```

## 添加对swagger @ApiModelProperty支持

```properties
field.required=@io.swagger.annotations.ApiModelProperty#required
```

## demo

***SwaggerModel.java***

```java
public class SwaggerModel {

    @ApiModelProperty(value = "字段A", required = true)
    private String a;

    public String getA() {
        return a;
    }

    public void setA(String a) {
        this.a = a;
    }
}
```


### 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| a |	integer | 必须 |  |  | mock: @natural(0,10000) |