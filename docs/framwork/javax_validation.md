## 在推荐配置中有部分javax.validation相关的配置

***默认选择的是不分组模式***

```properties
#[javax.validation]*
#Support for javax.validation annotations
param.required=@javax.validation.constraints.NotBlank
field.required=@javax.validation.constraints.NotBlank
param.required=@javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
field.required=@javax.validation.constraints.NotEmpty
```

***分组校验模式默认未选中***

``````properties
#[javax.validation(grouped)]
json.cache.disable=true
param.before=groovy:```
    logger.info("set curr groups:"+it.annValue("org.springframework.validation.annotation.Validated"))
    session.set("json-group", it.annValue("org.springframework.validation.annotation.Validated"))
```
param.after=groovy:```
    session.remove("json-group")
```
param.required=@javax.validation.constraints.NotBlank
param.required=@javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
field.required[@javax.validation.constraints.NotBlank]=groovy:```
    it.annMaps("javax.validation.constraints.NotBlank")?.any{tool.equalOrIntersect(session.get("json-group"),it["groups"])}
```
field.required[@javax.validation.constraints.NotNull]=groovy:```
    it.annMaps("javax.validation.constraints.NotNull")?.any{tool.equalOrIntersect(session.get("json-group"),it["groups"])}
```
field.required[@javax.validation.constraints.NotEmpty]=groovy:```
    it.annMaps("javax.validation.constraints.NotEmpty")?.any{tool.equalOrIntersect(session.get("json-group"),it["groups"])}
```
``````

***需要开启分组校验***

可以在 <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> ><kbd>Recommend</kbd> 中移除勾选`javax.validation`, 勾选`javax.validation(grouped)`

---

## [相关mock](https://github.com/tangcent/easy-yapi/blob/master/third/javax.validation.mock.config)不在内置推荐中, 有需要的话可自行增加如下[配置](/setting/index.html)

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

- 上述配置可根据实际情况予以必要的调整

| key | desc |
| --- | --- |
| number_min | 数字最小值 |
| number_max | 数字最大值 |
| float_dmin | 浮点数小数位数 |


***快速配置***

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/javax.validation.mock.config
```