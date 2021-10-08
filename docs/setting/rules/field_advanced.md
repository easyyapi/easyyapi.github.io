# field.advanced

- 提供`yapi`的高级设置信息, 返回一个`json`字符串或者`map`来将信息设置到`yapi`的高级设置中

![avatar](/asset/yapi-advanced.png)

## 例如: 支持javax.validation.constraints.Max&Min

``````properties

# Max、Min  -advanced
field.advanced[@javax.validation.constraints.Max]=groovy:```
    return [maximum:it.ann("javax.validation.constraints.Max")]
```
field.advanced[@javax.validation.constraints.Min]=groovy:```
    return [minimum:it.ann("javax.validation.constraints.Min")]
```

``````

## demo

***ValidationDemoDto.java***

```java
public class ValidationDemoDto {

    @Min(666)
    private Integer minInt;

    @Max(999)
    private Integer maxInt;

    @Min(666)
    private Double minDouble;

    @Max(999)
    private double maxDouble;

    @Min(666)
    @Max(999)
    private Integer rangeInt;

    @Min(66)
    @Max(9999)
    private float rangeFloat;
}
```

## 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| minInt | integer | 非必须 |  |  | 最小值: 666 |
| maxInt | integer | 非必须 |  |  | 最大值: 999 |
| minDouble | number | 非必须 |  |  | 最小值: 666 |
| maxDouble | number | 非必须 |  |  | 最大值: 999 |
| rangeInt | integer | 非必须 |  |  | 最大值: 999<br>最小值: 666 |
| rangeFloat | number | 非必须 |  |  | 最大值: 9999<br>最小值: 666 |