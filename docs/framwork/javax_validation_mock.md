## 需要通过`javax.validation`增加mock信息到yapi, 可自行增加如下[配置](/setting/index.html)

``````properties
# rules for javax.validation

# define var
number_min=-9999
number_max=9999
float_dmin=2
java_integer_types=["java.lang.Integer","int","java.lang.Long","long","java.lang.Short","short","java.math.BigInteger"]
java_float_types=["java.lang.String","java.lang.Float","float","java.lang.Double","double","java.math.BigDecimal"]
# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?"@integer":"@float"

# AssertTrue|AssertFalse
field.mock[@javax.validation.constraints.AssertFalse]=false
field.demo[@javax.validation.constraints.AssertFalse]=false
field.mock[@javax.validation.constraints.AssertTrue]=true
field.demo[@javax.validation.constraints.AssertTrue]=true

# DecimalMax+DecimalMin -mock
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"

# DecimalMax|DecimalMin  -mock
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+",${number_max},${float_dmin})"

# DecimalMax、DecimalMin  -advanced
field.advanced[@javax.validation.constraints.DecimalMax]=groovy:```
    def ann = it.annMap("javax.validation.constraints.DecimalMax")
    return [maximum:ann["value"],exclusiveMaximum:(ann["inclusive"]==false)]
```
field.advanced[@javax.validation.constraints.DecimalMin]=groovy:```
    def ann = it.annMap("javax.validation.constraints.DecimalMin")
    return [minimum:ann["value"],exclusiveMinimum:(ann["inclusive"]==false)]
```

# javax.validation.constraints.Digits

field.mock[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:```
    def max = "9".repeat(it.annValue("javax.validation.constraints.Digits","integer")).toInteger()
    return "@integer("+(-max)+","+max+")"
```
field.mock[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_float_types}.contains(it.jsonType().name())]=groovy:```
    def max = ("9".repeat(it.annValue("javax.validation.constraints.Digits","integer"))+"."+"9".repeat(it.annValue("javax.validation.constraints.Digits","fraction"))).toDouble()
    return "@float("+(-max)+","+max+",0,"+it.ann("javax.validation.constraints.Digits","fraction")+")"
```

field.advanced[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:```
    def max = "9".repeat(it.annValue("javax.validation.constraints.Digits","integer")).toInteger()
    return [minimum:-max,maximum:max]
```
field.advanced[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_float_types}.contains(it.jsonType().name())]=groovy:```
    def max = ("9".repeat(it.annValue("javax.validation.constraints.Digits","integer"))+"."+"9".repeat(it.annValue("javax.validation.constraints.Digits","fraction"))).toDouble()
    return [minimum:-max,maximum:max]
```


# javax.validation.constraints.Email
field.mock[@javax.validation.constraints.Email]=groovy:"@email"
field.advanced[@javax.validation.constraints.Email]={"format":"email"}

# Max+Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+",${float_dmin})"

# Max|Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+",${number_max},${float_dmin})"

# Max、Min  -advanced
field.advanced[@javax.validation.constraints.Max]=groovy:```
    return [maximum:it.ann("javax.validation.constraints.Max")]
```
field.advanced[@javax.validation.constraints.Min]=groovy:```
    return [minimum:it.ann("javax.validation.constraints.Min")]
```

# Negative&NegativeOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},-1)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},0)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0.01,${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0,${float_dmin})"

field.advanced[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_integer_types}.contains(it.jsonType().name())]={maximum:-1}
field.advanced[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_float_types}.contains(it.jsonType().name())]={maximum:-0.001}
field.advanced[@javax.validation.constraints.NegativeOrZero]={"maximum":0}

# javax.validation.constraints.Pattern
field.advanced[@javax.validation.constraints.Pattern]=groovy:```
    return tool.toJson([pattern:it.ann("javax.validation.constraints.Pattern","regexp")])
```

# Positive&PositiveOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(1,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0.01,${number_max},${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,${number_max},${float_dmin})"

field.advanced[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_integer_types}.contains(it.jsonType().name())]={minimum:1}
field.advanced[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_float_types}.contains(it.jsonType().name())]={minimum:0.001}
field.advanced[@javax.validation.constraints.PositiveOrZero]={minimum:0}

# javax.validation.constraints.Size

field.mock[groovy:it.hasAnn("javax.validation.constraints.Size")&&it.jsonType().name()=="java.lang.String"]=groovy:```
    def ann = it.annMap("javax.validation.constraints.Size")
    if(ann.containsKey("min")&&ann.containsKey("max")){
        return "@string("+ann["min"]+","+ann["max"]+")"
    }else if(ann.containsKey("min")){
        return "@string("+ann["min"]+")"
    }else if(ann.containsKey("max")){
        return "@string(0,"+ann["max"]+")"
    }
```
field.advanced[@javax.validation.constraints.Size]=groovy:```
    def element = (it.jsonType().name() == "java.lang.String")?"Length":"Items"
    def ann = it.annMap("javax.validation.constraints.Size")
    def advanced = [:]
    if(ann.containsKey("min")){
        advanced["min"+element] = ann["min"]
    }
    if(ann.containsKey("max")){
        advanced["max"+element] = ann["max"]
    }
    return advanced
```
``````

- 上述配置可根据实际情况予以必要的调整

| key | desc |
| --- | --- |
| number_min | 数字最小值 |
| number_max | 数字最大值 |
| float_dmin | 浮点数小数位数 |


***快速配置***

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/javax.validation.config
```
或者
```properties
properties.additional=https://gitee.com/tangcent/easy-yapi/raw/master/third/javax.validation.config
```