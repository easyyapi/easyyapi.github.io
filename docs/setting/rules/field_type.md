# field.type

> 指定字段的实际数据类型(用于json中字段类型与类中字段类型不一致)

## demo

***配置如下:***

```properties
field.type=#type
field.type[com.itangcent.common.model.TestJsonFieldBean#b]=java.lang.Integer
```

***TestJsonFieldBean.java***

```java
    /**
     * @type java.lang.Integer
     */
    private String a;

    private String b;
```

### 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| a | integer | 非必须 |  |  | mock: @natural(0,10000) |
| b | integer | 非必须 |  |  | mock: @natural(0,10000) |