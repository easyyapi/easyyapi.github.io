# `it`表示当前规则的应用对象

- 应用对象只提供方法即`it.method()✅`，不提供属性`it.property❎`

### 对于class(类)、method(方法/API)、field(字段/属性),arg(参数)都支持如下方法


| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| name() | String | 名称 | it.name() |
| hasAnn("annotation_name") | boolean | 是否有指定注解 | it.hasAnn("org.springframework.web.bind.annotation.RequestBody")| 
| ann("annotation_name") | String | 获取指定注解值(默认value) | it.ann("org.springframework.web.bind.annotation.RequestBody")| 
| ann("annotation_name","attr") | String | 获取指定注解中的指定参数值 | it.ann("org.springframework.web.bind.annotation.RequestMapping","path")| 
| doc() | String | 获取注释值 | it.doc()| 
| doc("tag") | String | 获取注释tag值(不需要加@) | it.doc("return")| 
| doc("tag","subTag") | String | 获取二级注释tag值 | it.doc("param","a")| 
| hasDoc("tag") | String | 是否有指定注释tag | it.hasDoc("ignore")| 
| hasModifier("modifier") | String | 是否有指定修饰 | it.hasModifier("public")| 
| modifiers() | String | 获取所有指定修饰 | it.modifiers() | 
| sourceCode() | String | 获取当前对象源码 | it.sourceCode() | 
| defineCode() | String | 获取当前对象纯定义代码 | it.defineCode() | 
| contextType() | String | 当前上下文类型 class/field/method/param | it.contextType()| 

### 不同的应用对象提供额外的方法

- class(类)

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| methods() | method[] | 类中的所有方法 | it.methods() |
| methodCnt() | int | 类中的方法数 | it.methodCnt() |
| field() | field[] | 类中的所有字段 | it.field() |
| fieldCnt() | int | 类中的字段数 | it.fieldCnt() |
| isExtend(superClass) | boolean | 是否继承某个类 | it.isExtend("some.class.qualifiedName") |
| isMap() | boolean | 是否为Map | it.isMap() |
| isCollection() | boolean | 是否为集合 | it.isCollection() |
| isArray() | boolean | 是否为数组 | it.isArray() |
| toJson(readGetter) | boolean | 获取当前类型的json字符串 | it.toJson(true) |

- method(方法/API)

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| returnType() | class | 方法返回类型 | it.returnType() |
| isVarArgs() | boolean | 是否有不定参 | it.isVarArgs() |
| args() | arg[] | 方法的所有参数 | it.args() |
| argTypes() | class[] | 方法的所有参数类型 | it.argTypes() |
| argCnt() | int | 方法参数个数 | it.argCnt() |
| containingClass() | class | 方法所属类 | it.containingClass() |
| returnJson(needInfer, readGetter) | class | 当前方法返回对象的json字符串 | it.returnJson(true,true) |

- field(字段/属性)

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| type() | class | 字段类型 | it.type()| 
| containingClass() | class | 字段所属类 | it.containingClass() | 
| jsonName() | string | 字段json名 | it.jsonName() | 
| jsonType() | class | 字段json类型(被转换过的) | it.jsonType() | 

- arg(参数)

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| type() | class | 参数类型 | it.type() |
| isVarArgs() | boolean | 是否为不定参 | it.isVarArgs() |
