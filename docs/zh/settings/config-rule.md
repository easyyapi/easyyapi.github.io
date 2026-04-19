# 可用配置规则

EasyYapi 提供了丰富的配置规则来自定义 API 文档生成。

## 规则格式

规则以键值对的形式定义在配置文件中：

```properties
rule.key=rule_value
```

部分规则支持 Groovy 脚本进行高级自定义：

```properties
rule.key=groovy:''' 
// Groovy 脚本
it.name() + " - 自定义后缀"
'''
```

## API 规则

| 规则 | 说明 |
|------|------|
| [api.name](./rules/api_name) | 设置 API 名称 |
| [api.open](./rules/api_open) | 设置 API 是否公开 |
| [api.status](./rules/api_status) | 设置 API 状态 |
| [api.tag](./rules/api_tag) | 设置 API 标签 |

## 类规则

| 规则 | 说明 |
|------|------|
| [class.doc](./rules/class_doc) | 设置类文档 |
| [class.is.ctrl](./rules/class_is_ctrl) | 判断是否为控制器 |
| [class.is.spring.ctrl](./rules/class_is_spring_ctrl) | 判断是否为 Spring 控制器 |
| [class.is.feign.ctrl](./rules/class_is_feign_ctrl) | 判断是否为 Feign 客户端 |
| [class.is.jaxrs.ctrl](./rules/class_is_jaxrs_ctrl) | 判断是否为 JAX-RS 资源 |
| [class.prefix.path](./rules/class_prefix_path) | 设置类前缀路径 |

## 字段规则

| 规则 | 说明 |
|------|------|
| [field.default.value](./rules/field_default_value) | 设置字段默认值 |
| [field.demo](./rules/field_demo) | 设置字段示例值 |
| [field.doc](./rules/field_doc) | 设置字段文档 |
| [field.ignore](./rules/field_ignore) | 忽略字段 |
| [field.mock](./rules/field_mock) | 设置字段 Mock 值 |
| [field.name](./rules/field_name) | 设置字段名称 |
| [field.required](./rules/field_required) | 设置字段是否必填 |
| [field.order](./rules/field_order) | 设置字段顺序 |
| [field.type](./rules/field_type) | 设置字段类型 |

## 方法规则

| 规则 | 说明 |
|------|------|
| [method.doc](./rules/method_doc) | 设置方法文档 |
| [method.return](./rules/method_return) | 设置方法返回类型 |
| [method.return.main](./rules/method_return_main) | 提取主要返回类型 |
| [method.content.type](./rules/method_content_type) | 设置内容类型 |
| [method.default.http.method](./rules/method_default_http_method) | 设置默认 HTTP 方法 |
| [method.additional.header](./rules/method_additional_header) | 添加额外请求头 |
| [method.additional.param](./rules/method_additional_param) | 添加额外参数 |

## 参数规则

| 规则 | 说明 |
|------|------|
| [param.default.value](./rules/param_default_value) | 设置参数默认值 |
| [param.demo](./rules/param_demo) | 设置参数示例值 |
| [param.doc](./rules/param_doc) | 设置参数文档 |
| [param.http.type](./rules/param_http_type) | 设置参数 HTTP 类型 |
| [param.ignore](./rules/param_ignore) | 忽略参数 |
| [param.name](./rules/param_name) | 设置参数名称 |
| [param.required](./rules/param_required) | 设置参数是否必填 |
| [param.type](./rules/param_type) | 设置参数类型 |

## JSON 规则

| 规则 | 说明 |
|------|------|
| [json.rule.convert](./rules/json_rule_convert) | 类型转换 |
| [json.rule.enum.convert](./rules/json_rule_enum_convert) | 枚举类型转换 |
| [json.additional.field](./rules/json_additional_field) | 添加额外字段 |

## 枚举规则

| 规则 | 说明 |
|------|------|
| [enum.use.name](./rules/enum_use_name) | 使用枚举名称 |
| [enum.use.ordinal](./rules/enum_use_ordinal) | 使用枚举序号 |
| [enum.use.by.type](./rules/enum_use_by_type) | 按类型使用枚举 |
| [enum.use.custom](./rules/enum_use_custom) | 自定义枚举值 |

## 其他规则

| 规则 | 说明 |
|------|------|
| [folder.name](./rules/folder_name) | 设置文件夹名称 |
| [module](./rules/module) | 设置模块名称 |
| [ignore](./rules/ignore) | 忽略 API |
| [path.multi](./rules/path_multi) | 多路径支持 |
| [export.after](./rules/export_after) | 导出后回调 |
| [http.call.before](./rules/http_call_before) | 请求前回调 |
| [http.call.after](./rules/http_call_after) | 请求后回调 |
| [constant.field.ignore](./rules/constant_field_ignore) | 忽略常量字段 |
