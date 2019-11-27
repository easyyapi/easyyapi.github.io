# doc.field

- 字段的额外注释

## 默认推荐配置

```properties
#deprecated info(java)
doc.field[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
doc.field[@java.lang.Deprecated]=「已废弃」

#deprecated info(kotlin)
doc.field[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")

```

## 添加对swagger @ApiModelProperty支持

```properties
doc.field=@io.swagger.annotations.ApiModelProperty#value
```

## demo

***SwaggerModel.java***

```java
public class SwaggerModel {

    /**
     * @deprecated 不再使用
     */
    @ApiModelProperty(value = "字段A", required = true)
    private String a;

    //constructors...

    //getters...
}
```

## 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| a | string | 非必须 |  | 字段A<br/>「已废弃」不再使用 |  |