# field.mock

- 用于生成`yapi`相关mock信息

## 默认推荐配置有三部分

---

### 允许通过注释`@mock`定义`mock`规则

```properties
#yapi mock
field.mock=#mock
```

### demo

***DemoDto.java***

```java
public class DemoDto {

    /**
     * @mock tangcent
     */
    @NotBlank
    private String name;//用户名

    /**
     * 年龄
     * @mock 1@natural(0,9)
     */
    @NotNull
    private Integer age;

}
```

***作为API返回值导出:***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| name      |	string		|	非必须  |  | 用户名 | mock: tangcent         |
| age	    |	integer		|	非必须  |  | 年龄   | mock: 1@natural(0,9)     |


---


### 通用mock

```properties
#mock for date

###set resolveMulti = first
java_date_types=["java.util.Date","java.sql.Timestamp","java.time.LocalDate","java.time.LocalDateTime"]
field.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()=="java.lang.String"] = groovy:"@date"
field.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()=="java.lang.Long"] = groovy:"@timestamp@string(\"number\", 3)"
###set resolveMulti = error
```


### demo

***DemoDto.java***

```java
public class DemoDto {

    //生日
    private LocalDate birthDay;

    //注册时间
    private LocalDateTime regtime;

}
```

***作为API返回值导出:***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| birthDay      |	string		|	非必须  |  | 生日 | mock: @date         |
| regtime	    |	string		|	非必须  |  | 注册时间   | mock: @date      |



---

###  `javax.validation`相关mock

```properties
# mock for javax.validation

###set resolveMulti = first
# define var
number_min=-9999
number_max=9999
float_dmin=2
java_integer_types=["java.lang.Integer","int","java.lang.Long","long","java.lang.Short","short","java.math.BigInteger"]
java_float_types=["java.lang.Float","float","java.lang.Double","double","java.math.BigDecimal"]
# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?"@integer":"@float"

# AssertTrue|AssertFalse|Email
field.mock[@javax.validation.constraints.AssertTrue]=true
field.mock[@javax.validation.constraints.AssertFalse]=false
field.mock[@javax.validation.constraints.Email]=groovy:"@email"

# Positive&PositiveOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(1,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0.01,${number_max},${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,${number_max},${float_dmin})"

# Negative&NegativeOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},-1)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},0)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0.01,${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0,${float_dmin})"

# Max+Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+",${float_dmin})"

# Max|Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+")"

# DecimalMax+DecimalMin
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"

# DecimalMax|DecimalMin
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+",${float_dmin})"

###set resolveMulti = error
```

### demo

***ValidationDemoDto.java***

```java
public class ValidationDemoDto {

    @NotNull
    private String str;

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

    @Negative
    private Integer negative;

    @NegativeOrZero
    private Integer negativeOrZero;

    @Positive
    private Integer positive;

    @PositiveOrZero
    private Integer positiveOrZero;

    @Positive
    private Float positiveFloat;

    @PositiveOrZero
    private float positiveOrZeroFloat;

    @Email
    private String email;

    @AssertTrue
    private boolean assertTrue;

    @AssertFalse
    private boolean assertFalse;

    //getter&setter
}

```


***作为API返回值导出:***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| rangeInt              |	integer		|	非必须  |  |  | mock: @integer(666,999)         |
| positiveOrZeroFloat	|	number		|	非必须  |  |  | mock: @float(0,88888888,6)      |
| maxInt	            |	integer		|	非必须  |  |  | mock: @integer(0,999)           |
| minInt	            |	integer		|	非必须  |  |  | mock: @integer(666)             |
| assertFalse	        |	boolean		|	非必须  |  |  | mock: false                     |
| maxDouble	            |	number		|	非必须  |  |  | mock: @float(0,999)             |
| minDouble         	|	number		|	非必须  |  |  | mock: @float(666)               |
| positive	            |	integer		|	非必须  |  |  | mock: @integer(1,88888888)      |
| positiveOrZero	    |	integer		|	非必须  |  |  | mock: @integer(0,88888888)      |
| str                   |	string	    |   必须    |  |  |                                 | 
| negative          	|	integer		|	非必须  |  |  | mock: @integer(-888888888,-1)   |
| rangeFloat	        |	number		|	非必须  |  |  | mock: @float(66,9999,6)         |
| assertTrue	        |	boolean		|	非必须  |  |  | mock: true                      |
| negativeOrZero    	|	integer		|	非必须  |  |  | mock: @integer(-888888888,0)    |
| positiveFloat     	|	number		|	非必须  |  |  | mock: @float(0.01,88888888,6)   |
| email	                |	string	    |	非必须  |  |  | mock: @email                    |

---

# field.mock.resolveProperty

- 用以开关是否解析`field.mock`规则结果中的占位符如`${float_with_two}`
- 默认为`true`,如果不希望解析，可以设置为关闭
```properties
field.mock.resolveProperty=false
```

## 使用示例


***配置如下***

```properties
#yapi mock
field.mock=#mock

#小数点后两位
float_with_two=@natural(0,10000).@natural(0,100)
```

***DemoDto.java***

```java
public class DemoDto {

    /**
     * 价格
     * @mock ${float_with_two}
     */
    @NotNull
    private Float price;

}
```

***导出结果***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| price	| number | 必须 |  | 价格	| mock: @natural(0,10000).@natural(0,100) |