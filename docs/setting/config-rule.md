# 支持的规则
| &nbsp;&nbsp;&nbsp;&nbsp;规则的key | 规则目标(上下文) | 版本 | 规则描述 |
| ------------ | ------------ | ------------ |------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;[module](rules/module.md) | class | v0.7.2+ | 为api分组 |
| &nbsp;&nbsp;&nbsp;&nbsp;[ignore](rules/ignore.md) | class/method | v0.7.2+ | 忽略API |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.field.name](rules/json_rule_field_name.md) | field | v0.7.2+ | 设置输出的字段名(用于json中字段名与类中字段名不一致) |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.field.ignore](rules/json_rule_field_ignore.md) | field | v0.7.2+ | 忽略字段(设置某些字段不出现在json中,或不需要请求时给出) |
| ☆[json.rule.convert](rules/json_rule_convert.md) | - | v0.7.2+ | 用于设置某些类型转换为其他类型处理，通常用于使用了Spring的自定义类型转换器的情况 |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.enum.convert](rules/json_rule_enum_convert.md) | class | v1.2.0+ | 用于枚举类型的特殊转换 |
| ☆[doc.field](rules/doc_field.md) | field | v0.7.2+ | 字段的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[doc.method](rules/doc_method.md) | method | v0.7.2+ | 方法(api)的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[doc.class](rules/doc_class.md)  | class | v1.3.0+ | 类上的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[doc.param](rules/doc_param.md)  | arg | v1.3.0+ | 参数的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.required](rules/param_required.md) | arg | v0.7.3+ | API参数是否为必须(即不可为空) |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.ignore](rules/param_ignore.md)  | arg | v1.3.0+ | 忽略API参数 |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.default.value](rules/param_default_value.md) | arg | v1.3.0+ | API参数的默认值 |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.additional.header](rules/method_additional_header.md) | method | v1.3.0+ | API需要额外的header |
|  |  |  | {name: "header name",value: "",desc: "",required:false, example:""} |
| &nbsp;&nbsp;&nbsp;&nbsp;method.additional.param | method | v1.3.0+ | API需要额外的参数 |
|  |  |  | {name: "param name",value: "defaultValue",desc: "",required:false} |
| &nbsp;&nbsp;&nbsp;&nbsp;method.additional.response.header | method | v1.3.0+ | API的响应包含额外的header |
|  |  |  | {name: "header name",value: "",desc: "",required:false, example:""} |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.required](rules/field_required.md) | field | v0.7.3+ | 字段是否为必须(即不可为空) |
| ☆[field.mock](rules/field_required.md) | field | v1.4.2+ | 生成`yapi`mock信息 |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.tag](rules/api_tag.md) | method | v0.7.5+ | 标记接口tag |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.status](rules/api_status.md) | method | v0.8.0+ | 标记接口status(应返回done/undone) |
| &nbsp;&nbsp;&nbsp;&nbsp;[mdoc.class.filter](rules/mdoc_class_filter.md) | class | v0.9.5+ | 选择哪些类可以导出方法文档(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.filter | method | v0.9.5+ | 选择哪些方法可以导出方法文档(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;[mdoc.method.path](rules/mdoc_method_path.md) | method | v0.9.5+ | 设置方法文档(rpc)的路径 |
| &nbsp;&nbsp;&nbsp;&nbsp;[mdoc.method.http.method](rules/mdoc_method_http_method.md) | method | v0.9.5+ | 设置方法文档(rpc)HTTP请求方式 |
| &nbsp;&nbsp;&nbsp;&nbsp;[class.prefix.path](rules/class_prefix_path.md)  | class | v1.3.0+ | 设置API请求前缀 |
| &nbsp;&nbsp;&nbsp;&nbsp;[constant.field.ignore](rules/constant_field_ignore.md)  | field | v1.3.8+ | 忽略常量字段 |
| ☆[method.return.main](rules/method_return_main.md)  | method | v1.3.8+ | 设置返回值的核心主体 |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.name](rules/api_name.md)  | method | v1.4.1+ | 设置api的名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.default.http.method](rules/method_default_http_method.md)  | method | v1.4.2+ | 设置默认的api的HttpMethod |

# 简单规则
- \# 读取注释上的tag
- @ 读取注解
   - @xxx 读取方法或字段上的注解
   - @xxx#yyy 读取方法或字段上的注解中的attr值

# 高级脚本规则(beta)

- 由于JDK11后js引擎可能缺失，故推荐使用groovy作为首选
- groovy规则为 groovy:groovyScript
- js规则为 js:jsScript
- 脚本中默认注入[it]表示当前规则的应用对象,应用对象只提供方法即[it.method()✅]，不提供属性[it.property❎]

### 对于class(类)、method(方法/API)、field(字段/属性),arg(参数)都支持如下方法


| 方法  |  返回值  |  描述  |  例子  |
| ------------ | ------------ | ------------ |------------ |
| name() | String | 名称 | it.name() |
| hasAnn("annotation_name") | boolean | 是否有指定注解 | it.hasAnn("org.springframework.web.bind.annotation.RequestBody")| 
| ann("annotation_name") | String | 获取指定注解值(默认value) | it.ann("org.springframework.web.bind.annotation.RequestBody")| 
| ann("annotation_name","attr") | String | 获取指定注解中的指定参数值 | it.ann("org.springframework.web.bind.annotation.RequestMapping","path")| 
| doc() | String | 获取注释值 | it.doc()| 
| doc("tag") | String | 获取注释tag值(不需要加@) | it.doc("return")| 
| doc("tag","subTag") | String | 获取二级注释tag值 | it.doc("param","a")| 
| hasDoc("tag") | String | 是否有指定注释tag | it.hasDoc("ignore")| 
| contextType() | String | 当前上下文类型 class/field/method/param | it.contextType()| 

### 不同的应用对象提供额外的方法

- class(类)

| 方法  |  返回值  |  描述  |  例子  |
| ------------ | ------------ | ------------ |------------ |
| methods() | method[] | 类中的所有方法 | it.methods() |
| methodCnt() | int | 类中的方法数 | it.methodCnt() |
| field() | int | 类中的所有字段 | it.field() |
| fieldCnt() | int | 类中的字段数 | it.fieldCnt() |
| isExtend() | boolean | 是否继承某个类 | it.isExtend() |
| isMap() | boolean | 是否为Map | it.isMap() |
| isCollection() | boolean | 是否为集合 | it.isCollection() |
| isArray() | boolean | 是否为数组 | it.isArray() |

- method(方法/API)

| 方法  |  返回值  |  描述  |  例子  |
| ------------ | ------------ | ------------ |------------ |
| returnType() | class | 方法返回类型 | it.returnType() |
| isVarArgs() | boolean | 是否有不定参 | it.isVarArgs() |
| args() | arg[] | 方法的所有参数 | it.args() |
| argTypes() | class[] | 方法的所有参数类型 | it.argTypes() |
| argCnt() | int | 方法参数个数 | it.argCnt() |
| containingClass() | class | 方法所属类 | it.containingClass() |

- field(字段/属性)

| 方法  |  返回值  |  描述  |  例子  |
| ------------ | ------------ | ------------ |------------ |
| type() | class | 字段类型 | it.type()| 
| containingClass() | class | 方法所属类 | it.containingClass()| 
| jsonName() | class | 字段json名 | it.jsonName()| 

- arg(参数)

| 方法  |  返回值  |  描述  |  例子  |
| ------------ | ------------ | ------------ |------------ |
| type() | class | 参数类型 | it.type() |
| isVarArgs() | boolean | 是否为不定参 | it.isVarArgs() |
