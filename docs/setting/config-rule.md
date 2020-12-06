# 支持的规则

| &nbsp;&nbsp;&nbsp;&nbsp;规则的key | 规则目标(上下文) | 版本 | 规则描述 |
| ------------ | ------------ | ------------ |------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;[module](rules/module.md) | class | v0.7.2+ | 为api分组 |
| &nbsp;&nbsp;&nbsp;&nbsp;[ignore](rules/ignore.md) | class/method | v0.7.2+ | 忽略API |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.field.name](rules/json_rule_field_name.md) | field | v0.7.2+ | 设置输出的字段名(用于json中字段名与类中字段名不一致) |
| &nbsp;&nbsp;&nbsp;&nbsp;[~~json.rule.field.ignore~~](rules/json_rule_field_ignore.md) | field | v0.7.2+ | 忽略字段(设置某些字段不出现在json中,或不需要请求时给出) 已废弃, 使用[field.ignore](rules/field_ignore.md)代替 |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.ignore](rules/field_ignore.md) | field | v2.0.0+ | 忽略字段(设置某些字段不出现在json中,或不需要请求时给出) |
| ☆[json.rule.convert](rules/json_rule_convert.md) | - | v0.7.2+ | 用于设置某些类型转换为其他类型处理，通常用于使用了Spring的自定义类型转换器的情况 |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.enum.convert](rules/json_rule_enum_convert.md) | class | v1.2.0+ | 用于枚举类型的特殊转换 |
| ☆[field.doc](rules/field_doc.md) | field | v0.7.2+ | 字段的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.doc](rules/method_doc.md) | method | v0.7.2+ | 方法(api)的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[class.doc](rules/class_doc.md)  | class | v1.3.0+ | 类上的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.doc](rules/param_doc.md)  | arg | v1.3.0+ | 参数的额外注释 |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.required](rules/param_required.md) | arg | v0.7.3+ | API参数是否为必须(即不可为空) |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.ignore](rules/param_ignore.md)  | arg | v1.3.0+ | 忽略API参数 |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.default.value](rules/param_default_value.md) | arg | v1.3.0+ | API参数的默认值 |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.http.type](rules/param_http_type.md) | arg | v2.0.0+ | 用于设置API参数在HTTP请求中的类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.demo](rules/param_demo.md) | - | v1.9.3+ | 用以设置参数的示例值 |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.content.type](rules/method_content_type.md) | - | v1.9.7+ | 用以设置API请求的content-type |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.default.http.method](rules/method_default_http_method.md)  | method | v1.4.2+ | 设置默认的api的HttpMethod |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.additional.header](rules/method_additional_header.md) | method | v1.3.0+ | API需要额外的header |
|  |  |  | {name: "header name",value: "",desc: "",required:false, example:""} |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.additional.param](rules/method_additional_param.md) | method | v1.3.0+ | API需要额外的参数 |
|  |  |  | {name: "param name",value: "defaultValue",desc: "",required:false} |
| &nbsp;&nbsp;&nbsp;&nbsp;method.additional.response.header | method | v1.3.0+ | API的响应包含额外的header |
|  |  |  | {name: "header name",value: "",desc: "",required:false, example:""} |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.required](rules/field_required.md) | field | v0.7.3+ | 字段是否为必须(即不可为空) |
| ☆[field.mock](rules/field_mock.md) | field | v1.4.2+ | 生成`yapi`mock信息 |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.mock.resolveProperty](rules/field_mock.md#field.mock.resolveProperty) | - | v1.4.2+ | 用以开关是否解析`field.mock`规则结果中的占位符 |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.default.value](rules/field_default_value.md) | - | v1.7.1+ | 用以设置字段的默认值 |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.demo](rules/field_demo.md) | - | v1.9.3+ | 用以设置字段的示例值 |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.tag](rules/api_tag.md) | method | v0.7.5+ | 标记接口tag |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.open](rules/api_open.md) | method | v1.9.4+ | 标记接口是否公开 |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.status](rules/api_status.md) | method | v0.8.0+ | 标记接口status(应返回done/undone) |
| &nbsp;&nbsp;&nbsp;&nbsp;[class.is.ctrl](rules/class_is_ctrl.md) | method | v2.0.8+ | 允许导出指定类中的`api` |
| &nbsp;&nbsp;&nbsp;&nbsp;[mdoc.class.filter](rules/mdoc_class_filter.md) | class | v0.9.5+ | 选择哪些类可以导出方法文档(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.filter | method | v0.9.5+ | 选择哪些方法可以导出方法文档(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;[mdoc.method.path](rules/mdoc_method_path.md) | method | v0.9.5+ | 设置方法文档(rpc)的路径 |
| &nbsp;&nbsp;&nbsp;&nbsp;[mdoc.method.http.method](rules/mdoc_method_http_method.md) | method | v0.9.5+ | 设置方法文档(rpc)HTTP请求方式 |
| &nbsp;&nbsp;&nbsp;&nbsp;[class.prefix.path](rules/class_prefix_path.md)  | class | v1.3.0+ | 设置API请求前缀 |
| &nbsp;&nbsp;&nbsp;&nbsp;[constant.field.ignore](rules/constant_field_ignore.md)  | field | v1.3.8+ | 忽略常量字段 |
| ☆[method.return.main](rules/method_return_main.md)  | method | v1.3.8+ | 设置返回值的核心主体 |
| ☆[method.return](rules/method_return.md)  | method | v1.6.1+ | 设置返回值的类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.name](rules/api_name.md)  | method | v1.4.1+ | 设置api的名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;[folder.name](rules/folder_name.md)  | method | v1.9.2+ | 设置api所属文件夹 |
| &nbsp;&nbsp;&nbsp;&nbsp;[path.multi](rules/path_multi.md)  | method | v1.9.2+ | 当API有多个路径时如何选择 |
| &nbsp;&nbsp;&nbsp;&nbsp;[postman.host](rules/postman_host.md)  | class | v1.5.2+ | 设置`postman`API的host |
| &nbsp;&nbsp;&nbsp;&nbsp;[postman.prerequest](rules/postman_prerequest.md)  | class | v1.9.5+ | 设置`postman`API的[`prerequest`](https://learning.postman.com/docs/postman/scripts/pre-request-scripts/) |
| &nbsp;&nbsp;&nbsp;&nbsp;[class.postman.prerequest](rules/postman_prerequest.md#class.postman.prerequest)  | class | v1.9.5+ | 设置`postman·folder`上的[`prerequest`](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/#re-using-pre-request-scripts) |
| &nbsp;&nbsp;&nbsp;&nbsp;[collection.postman.prerequest](rules/postman_prerequest.md#collection.postman.prerequest)  | class | v1.9.5+ | 设置`postman·collection`上的[`prerequest`](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/#re-using-pre-request-scripts) |
| &nbsp;&nbsp;&nbsp;&nbsp;[postman.test](rules/postman_test.md)  | class | v1.9.5+ | 设置`postman`API的[`test`](https://learning.postman.com/docs/postman/scripts/test-scripts/) |
| &nbsp;&nbsp;&nbsp;&nbsp;[class.postman.test](rules/postman_test.md#class.postman.test)  | class | v1.9.5+ | 设置`postman·folder`上的[`test`](https://learning.postman.com/docs/writing-scripts/test-scripts/#testing-collections-and-folders) |
| &nbsp;&nbsp;&nbsp;&nbsp;[collection.postman.test](rules/postman_test.md#collection.postman.test)  | class | v1.9.5+ | 设置`postman·collection`上的[`test`](https://learning.postman.com/docs/writing-scripts/test-scripts/#testing-collections-and-folders) |
| &nbsp;&nbsp;&nbsp;&nbsp;[http.call.before](rules/http_call_before.md)  | request | v1.9.0+ | http请求前回调 |
| &nbsp;&nbsp;&nbsp;&nbsp;[http.call.after](rules/http_call_after.md)  | request&response | v1.9.0+ | http请求后回调 |

---

***NOTES:[本地文件配置](local-file-config.md)***

---

# value的取值规则

## 简单规则

- \# 读取注释上的tag

   - 如 `#fake`对应取的注释如下:

      ```java
      /**
      * @fake
      */
      ```

- @ 读取注解
   - @xxx 读取方法或字段上的注解,如`@org.springframework.web.bind.annotation.RequestMapping`

      ```java
      @RequestMapping("path")
      public class FakeClass{...}
      ```
   - @xxx#yyy 读取方法或字段上的注解中的attr值,如`@org.springframework.web.bind.annotation.RequestMapping#value`

      ```java
      @RequestMapping(value = "path")
      public class FakeClass{...}
      ```

## 高级脚本规则

- 由于`JDK11`后`js`引擎可能缺失，故推荐使用`groovy`作为首选
- `groovy`规则为 `groovy:groovyScript`
- `js`规则为 `js:jsScript`
- 脚本中可用工具/对象: [tools](tools.md)
- 脚本调试: [script-executor](../documents/script-executor.html)
