# Available Config Rules

EasyYapi provides a rich set of configuration rules to customize API documentation generation.

## Rule Format

Rules are defined as key-value pairs in the config file:

```properties
rule.key=rule_value
```

Some rules support Groovy scripts for advanced customization:

```properties
rule.key=groovy:''' 
// Groovy script
it.name() + " - custom suffix"
'''
```

## API Rules

| Rule | Description |
|------|-------------|
| [api.name](./rules/api_name) | Set API name |
| [api.open](./rules/api_open) | Set whether API is public |
| [api.status](./rules/api_status) | Set API status |
| [api.tag](./rules/api_tag) | Set API tags |

## Class Rules

| Rule | Description |
|------|-------------|
| [class.doc](./rules/class_doc) | Set class documentation |
| [class.is.ctrl](./rules/class_is_ctrl) | Determine if class is a controller |
| [class.is.spring.ctrl](./rules/class_is_spring_ctrl) | Determine if class is a Spring controller |
| [class.is.feign.ctrl](./rules/class_is_feign_ctrl) | Determine if class is a Feign client |
| [class.is.jaxrs.ctrl](./rules/class_is_jaxrs_ctrl) | Determine if class is a JAX-RS resource |
| [class.is.quarkus.ctrl](./rules/class_is_quarkus_ctrl) | Determine if class is a Quarkus resource |
| [class.is.grpc](./rules/class_is_grpc) | Determine if class is a gRPC service |
| [class.prefix.path](./rules/class_prefix_path) | Set class prefix path |

## Field Rules

| Rule | Description |
|------|-------------|
| [field.default.value](./rules/field_default_value) | Set field default value |
| [field.demo](./rules/field_demo) | Set field example value |
| [field.doc](./rules/field_doc) | Set field documentation |
| [field.ignore](./rules/field_ignore) | Ignore field |
| [field.mock](./rules/field_mock) | Set field mock value |
| [field.name](./rules/field_name) | Set field name |
| [field.name.suffix](./rules/field_name_suffix) | Set field name suffix |
| [field.required](./rules/field_required) | Set whether field is required |
| [field.order](./rules/field_order) | Set field order |
| [field.order.with](./rules/field_order_with) | Set field order by comparator |
| [field.advanced](./rules/field_advanced) | Set field advanced info |
| [field.max.depth](./rules/field_max_depth) | Set max recursion depth for fields |

## Method Rules

| Rule | Description |
|------|-------------|
| [method.doc](./rules/method_doc) | Set method documentation |
| [method.return](./rules/method_return) | Set method return type |
| [method.return.main](./rules/method_return_main) | Extract main return type |
| [method.content.type](./rules/method_content_type) | Set content type |
| [method.default.http.method](./rules/method_default_http_method) | Set default HTTP method |
| [method.additional.header](./rules/method_additional_header) | Add additional request headers |
| [method.additional.param](./rules/method_additional_param) | Add additional parameters |
| [method.additional.response.header](./rules/method_additional_response_header) | Add additional response headers |

## Param Rules

| Rule | Description |
|------|-------------|
| [param.default.value](./rules/param_default_value) | Set param default value |
| [param.demo](./rules/param_demo) | Set param example value |
| [param.doc](./rules/param_doc) | Set param documentation |
| [param.http.type](./rules/param_http_type) | Set param HTTP type |
| [param.ignore](./rules/param_ignore) | Ignore param |
| [param.name](./rules/param_name) | Set param name |
| [param.required](./rules/param_required) | Set whether param is required |
| [param.type](./rules/param_type) | Set param type |
| [param.mock](./rules/param_mock) | Set param mock value |
| [param.max.depth](./rules/param_max_depth) | Set max recursion depth for params |

## Enum Rules

| Rule | Description |
|------|-------------|
| [enum.use.custom](./rules/enum_use_custom) | Custom enum value |

## JSON Rules

| Rule | Description |
|------|-------------|
| [json.rule.convert](./rules/json_rule_convert) | Type conversion |
| [json.additional.field](./rules/json_additional_field) | Add additional fields |
| [json.unwrapped](./rules/json_unwrapped) | Handle @JsonUnwrapped |
| [json.rule.field.ignore](./rules/json_rule_field_ignore) | JSON field ignore rule |
| [json.rule.field.name](./rules/json_rule_field_name) | JSON field name rule |

## Other Rules

| Rule | Description |
|------|-------------|
| [folder.name](./rules/folder_name) | Set folder name |
| [module](./rules/module) | Set module name |
| [ignore](./rules/ignore) | Ignore API |
| [path.multi](./rules/path_multi) | Multi-path support |
| [export.after](./rules/export_after) | Post-export callback |
| [http.call.before](./rules/http_call_before) | Pre-request callback |
| [http.call.after](./rules/http_call_after) | Post-request callback |
| [constant.field.ignore](./rules/constant_field_ignore) | Ignore constant fields |
| [endpoint.prefix.path](./rules/endpoint_prefix_path) | Set endpoint prefix path |
| [properties.prefix](./rules/properties_prefix) | Set properties prefix |

## Postman Rules

| Rule | Description |
|------|-------------|
| [postman.host](./rules/postman_host) | Set Postman base URL |
| [postman.prerequest](./rules/postman_prerequest) | Pre-request script |
| [postman.test](./rules/postman_test) | Test script |
| [postman.class.prerequest](./rules/postman_class_prerequest) | Class-level pre-request script |
| [postman.class.test](./rules/postman_class_test) | Class-level test script |
| [postman.collection.prerequest](./rules/postman_collection_prerequest) | Collection-level pre-request event |
| [postman.collection.test](./rules/postman_collection_test) | Collection-level test event |
| [postman.format.after](./rules/postman_format_after) | Post-format event |

## YApi Rules

| Rule | Description |
|------|-------------|
| [yapi.save.before](./rules/yapi_save_before) | Pre-save event |
| [yapi.save.after](./rules/yapi_save_after) | Post-save event |
