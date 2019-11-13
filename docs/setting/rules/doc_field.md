# doc.field

- 字段的额外注释


### 默认推荐配置
```properties
#deprecated info(java)
doc.field[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
doc.field[@java.lang.Deprecated]=「已废弃」

#deprecated info(kotlin)
doc.field[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")

```

### 添加对swagger @ApiModelProperty支持
```properties
doc.field=@io.swagger.annotations.ApiModelProperty#value
```

### demo
```java
public class SwaggerModel {

    @ApiModelProperty("字段A")
    private String a;

    public String getA() {
        return a;
    }

    public void setA(String a) {
        this.a = a;
    }
}
```