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
| [class.is.ctrl](./rules/class_is_ctrl) ~~已废弃~~ | 判断是否为控制器（class.is.spring.ctrl 的别名） |
| [class.is.spring.ctrl](./rules/class_is_spring_ctrl) | 判断是否为 Spring 控制器 |
| [class.is.feign.ctrl](./rules/class_is_feign_ctrl) | 判断是否为 Feign 客户端 |
| [class.is.jaxrs.ctrl](./rules/class_is_jaxrs_ctrl) | 判断是否为 JAX-RS 资源 |
| [class.is.quarkus.ctrl](./rules/class_is_quarkus_ctrl) | 判断是否为 Quarkus 资源 |
| [class.is.grpc](./rules/class_is_grpc) | 判断是否为 gRPC 服务 |
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
| [field.name.prefix](./rules/field_name_prefix) | 设置字段名称前缀 |
| [field.name.suffix](./rules/field_name_suffix) | 设置字段名称后缀 |
| [field.required](./rules/field_required) | 设置字段是否必填 |
| [field.order](./rules/field_order) | 设置字段顺序 |
| [field.order.with](./rules/field_order_with) | 设置字段排序比较器 |
| [field.advanced](./rules/field_advanced) | 设置字段高级信息 |
| [field.max.depth](./rules/field_max_depth) | 设置字段最大递归深度 |

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
| [method.additional.response.header](./rules/method_additional_response_header) | 添加额外响应头 |

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
| [param.mock](./rules/param_mock) | 设置参数 Mock 值 |
| [param.max.depth](./rules/param_max_depth) | 设置参数最大递归深度 |

## 枚举规则

| 规则 | 说明 |
|------|------|
| [enum.use.custom](./rules/enum_use_custom) | 自定义枚举值 |

## JSON 规则

| 规则 | 说明 |
|------|------|
| [json.rule.convert](./rules/json_rule_convert) | 类型转换 |
| [json.additional.field](./rules/json_additional_field) | 添加额外字段 |
| [json.unwrapped](./rules/json_unwrapped) | 处理 @JsonUnwrapped |

## 其他规则

| 规则 | 说明 |
|------|------|
| [folder.name](./rules/folder_name) | 设置文件夹名称 |
| [module](./rules/module) ~~已废弃~~ | 设置模块名称（yapi.project 的别名） |
| [ignore](./rules/ignore) | 忽略 API |
| [path.multi](./rules/path_multi) | 多路径支持 |
| [export.after](./rules/export_after) | 导出后回调 |
| [http.call.before](./rules/http_call_before) | 请求前回调 |
| [http.call.after](./rules/http_call_after) | 请求后回调 |
| [constant.field.ignore](./rules/constant_field_ignore) | 忽略常量字段 |
| [endpoint.prefix.path](./rules/endpoint_prefix_path) | 设置端点前缀路径 |

## Postman 规则

| 规则 | 说明 |
|------|------|
| [postman.host](./rules/postman_host) | 设置 Postman 基础 URL |
| [postman.prerequest](./rules/postman_prerequest) | 前置请求脚本 |
| [postman.test](./rules/postman_test) | 测试脚本 |
| [postman.class.prerequest](./rules/postman_class_prerequest) | 类级别前置请求脚本 |
| [postman.class.test](./rules/postman_class_test) | 类级别测试脚本 |
| [postman.collection.prerequest](./rules/postman_collection_prerequest) | 集合级别前置请求事件 |
| [postman.collection.test](./rules/postman_collection_test) | 集合级别测试事件 |
| [postman.format.after](./rules/postman_format_after) | 格式化后事件 |

## YApi 规则

| 规则 | 说明 |
|------|------|
| [yapi.project](./rules/yapi_project) | 设置 YApi 项目 |
| [yapi.export.before](./rules/yapi_export_before) | 导出前事件 |
| [yapi.save.before](./rules/yapi_save_before) | 保存前事件 |
| [yapi.save.after](./rules/yapi_save_after) | 保存后事件 |
