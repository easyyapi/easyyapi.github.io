import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '基于 Javadoc/KDoc/ScalaDoc 解析 API 文档的 IntelliJ IDEA 插件',

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/zh/guide/': sidebarGuide(),
      '/zh/framework/': sidebarFramework(),
      '/zh/settings/': sidebarSettings(),
      '/zh/qa/': sidebarQA(),
    },

    editLink: {
      pattern: 'https://github.com/easyyapi/easyyapi.github.io/edit/dev/docs/zh/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '基于 Apache-2.0 许可发布',
      copyright: 'Copyright 2019-present tangcent',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

function nav() {
  return [
    { text: '指南', link: '/zh/guide/', activeMatch: '/zh/guide/' },
    { text: '框架支持', link: '/zh/framework/', activeMatch: '/zh/framework/' },
    { text: '配置', link: '/zh/settings/', activeMatch: '/zh/settings/' },
    { text: 'QA', link: '/zh/qa/', activeMatch: '/zh/qa/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '快速上手',
      items: [
        { text: '介绍', link: '/zh/guide/' },
        { text: '安装', link: '/zh/guide/installation' },
        { text: '使用', link: '/zh/guide/use' },
      ],
    },
    {
      text: '导出',
      items: [
        { text: '导出到 YApi', link: '/zh/guide/export2yapi' },
        { text: '导出到 Postman', link: '/zh/guide/export2postman' },
        { text: '导出到 Markdown', link: '/zh/guide/export2markdown' },
        { text: '导出到 cURL', link: '/zh/guide/export2curl' },
        { text: '导出到 HttpClient', link: '/zh/guide/export2httpclient' },
        { text: '导出普通 Java Method 文档', link: '/zh/guide/export-method-doc' },
        { text: '导出 RPC 文档', link: '/zh/guide/export-rpc' },
      ],
    },
    {
      text: '进阶',
      items: [
        { text: 'Call API', link: '/zh/guide/call' },
      ],
    },
    {
      text: '参考',
      items: [
        { text: '注释规范', link: '/zh/guide/docs' },
      ],
    },
  ]
}

function sidebarFramework() {
  return [
    {
      text: '框架支持',
      items: [
        { text: '概览', link: '/zh/framework/' },
        { text: 'Spring Boot', link: '/zh/framework/springboot' },
        { text: 'Spring Actuator', link: '/zh/framework/actuator' },
        { text: 'Spring Configuration', link: '/zh/framework/spring-configuration' },
        { text: 'JAX-RS', link: '/zh/framework/jaxrs' },
        { text: 'gRPC', link: '/zh/framework/grpc' },
        { text: 'javax.validation', link: '/zh/framework/javax-validation' },
        { text: 'Jakarta Validation', link: '/zh/framework/jakarta-validation' },
        { text: 'Gson', link: '/zh/framework/gson' },
        { text: 'Fastjson', link: '/zh/framework/fastjson' },
      ],
    },
    {
      text: '内置扩展',
      items: [
        { text: '废弃信息与类型转换', link: '/zh/framework/deprecated-converts' },
        { text: '字段排序', link: '/zh/framework/field-order' },
      ],
    },
  ]
}

function sidebarSettings() {
  return [
    {
      text: '配置',
      items: [
        { text: '概览', link: '/zh/settings/' },
        { text: '在 IDEA 中设置', link: '/zh/settings/ide-setting' },
        { text: '使用项目内配置文件', link: '/zh/settings/local-file-config' },
        { text: '使用远程配置文件', link: '/zh/settings/remote-config' },
        { text: 'YApi 相关配置', link: '/zh/settings/yapi' },
        { text: 'Postman 相关配置', link: '/zh/settings/postman' },
        { text: 'YApi Mock 配置', link: '/zh/settings/yapi-mock' },
        { text: 'Markdown 模板配置', link: '/zh/settings/template' },
      ],
    },
    {
      text: '可用配置规则',
      items: [
        { text: '规则总览', link: '/zh/settings/config-rule' },
        {
          text: 'API 规则',
          collapsed: true,
          items: [
            { text: 'api.name', link: '/zh/settings/rules/api_name' },
            { text: 'api.open', link: '/zh/settings/rules/api_open' },
            { text: 'api.status', link: '/zh/settings/rules/api_status' },
            { text: 'api.tag', link: '/zh/settings/rules/api_tag' },
          ],
        },
        {
          text: 'Class 规则',
          collapsed: true,
          items: [
            { text: 'class.doc', link: '/zh/settings/rules/class_doc' },
            { text: 'class.is.ctrl', link: '/zh/settings/rules/class_is_ctrl' },
            { text: 'class.is.spring.ctrl', link: '/zh/settings/rules/class_is_spring_ctrl' },
            { text: 'class.is.feign.ctrl', link: '/zh/settings/rules/class_is_feign_ctrl' },
            { text: 'class.is.jaxrs.ctrl', link: '/zh/settings/rules/class_is_jaxrs_ctrl' },
            { text: 'class.is.quarkus.ctrl', link: '/zh/settings/rules/class_is_quarkus_ctrl' },
            { text: 'class.is.grpc', link: '/zh/settings/rules/class_is_grpc' },
            { text: 'class.prefix.path', link: '/zh/settings/rules/class_prefix_path' },
          ],
        },
        {
          text: 'Field 规则',
          collapsed: true,
          items: [
            { text: 'field.default.value', link: '/zh/settings/rules/field_default_value' },
            { text: 'field.demo', link: '/zh/settings/rules/field_demo' },
            { text: 'field.doc', link: '/zh/settings/rules/field_doc' },
            { text: 'field.ignore', link: '/zh/settings/rules/field_ignore' },
            { text: 'field.mock', link: '/zh/settings/rules/field_mock' },
            { text: 'field.name', link: '/zh/settings/rules/field_name' },
            { text: 'field.name.prefix', link: '/zh/settings/rules/field_name_prefix' },
            { text: 'field.name.suffix', link: '/zh/settings/rules/field_name_suffix' },
            { text: 'field.required', link: '/zh/settings/rules/field_required' },
            { text: 'field.order', link: '/zh/settings/rules/field_order' },
            { text: 'field.order.with', link: '/zh/settings/rules/field_order_with' },
            { text: 'field.advanced', link: '/zh/settings/rules/field_advanced' },
            { text: 'field.max.depth', link: '/zh/settings/rules/field_max_depth' },
          ],
        },
        {
          text: 'Method 规则',
          collapsed: true,
          items: [
            { text: 'method.doc', link: '/zh/settings/rules/method_doc' },
            { text: 'method.return', link: '/zh/settings/rules/method_return' },
            { text: 'method.return.main', link: '/zh/settings/rules/method_return_main' },
            { text: 'method.content.type', link: '/zh/settings/rules/method_content_type' },
            { text: 'method.default.http.method', link: '/zh/settings/rules/method_default_http_method' },
            { text: 'method.additional.header', link: '/zh/settings/rules/method_additional_header' },
            { text: 'method.additional.param', link: '/zh/settings/rules/method_additional_param' },
            { text: 'method.additional.response.header', link: '/zh/settings/rules/method_additional_response_header' },
          ],
        },
        {
          text: 'Param 规则',
          collapsed: true,
          items: [
            { text: 'param.default.value', link: '/zh/settings/rules/param_default_value' },
            { text: 'param.demo', link: '/zh/settings/rules/param_demo' },
            { text: 'param.doc', link: '/zh/settings/rules/param_doc' },
            { text: 'param.http.type', link: '/zh/settings/rules/param_http_type' },
            { text: 'param.ignore', link: '/zh/settings/rules/param_ignore' },
            { text: 'param.name', link: '/zh/settings/rules/param_name' },
            { text: 'param.required', link: '/zh/settings/rules/param_required' },
            { text: 'param.type', link: '/zh/settings/rules/param_type' },
            { text: 'param.mock', link: '/zh/settings/rules/param_mock' },
            { text: 'param.max.depth', link: '/zh/settings/rules/param_max_depth' },
          ],
        },
        {
          text: 'Enum 规则',
          collapsed: true,
          items: [
            { text: 'enum.use.custom', link: '/zh/settings/rules/enum_use_custom' },
          ],
        },
        {
          text: 'JSON 规则',
          collapsed: true,
          items: [
            { text: 'json.rule.convert', link: '/zh/settings/rules/json_rule_convert' },
            { text: 'json.additional.field', link: '/zh/settings/rules/json_additional_field' },
            { text: 'json.unwrapped', link: '/zh/settings/rules/json_unwrapped' },
            { text: 'json.rule.field.ignore', link: '/zh/settings/rules/json_rule_field_ignore' },
            { text: 'json.rule.field.name', link: '/zh/settings/rules/json_rule_field_name' },
          ],
        },
        {
          text: 'Postman 规则',
          collapsed: true,
          items: [
            { text: 'postman.host', link: '/zh/settings/rules/postman_host' },
            { text: 'postman.prerequest', link: '/zh/settings/rules/postman_prerequest' },
            { text: 'postman.test', link: '/zh/settings/rules/postman_test' },
            { text: 'postman.class.prerequest', link: '/zh/settings/rules/postman_class_prerequest' },
            { text: 'postman.class.test', link: '/zh/settings/rules/postman_class_test' },
            { text: 'postman.collection.prerequest', link: '/zh/settings/rules/postman_collection_prerequest' },
            { text: 'postman.collection.test', link: '/zh/settings/rules/postman_collection_test' },
            { text: 'postman.format.after', link: '/zh/settings/rules/postman_format_after' },
          ],
        },
        {
          text: '其他规则',
          collapsed: true,
          items: [
            { text: 'folder.name', link: '/zh/settings/rules/folder_name' },
            { text: 'module', link: '/zh/settings/rules/module' },
            { text: 'yapi.project', link: '/zh/settings/rules/yapi_project' },
            { text: 'ignore', link: '/zh/settings/rules/ignore' },
            { text: 'constant.field.ignore', link: '/zh/settings/rules/constant_field_ignore' },
            { text: 'endpoint.prefix.path', link: '/zh/settings/rules/endpoint_prefix_path' },
            { text: 'path.multi', link: '/zh/settings/rules/path_multi' },
          ],
        },
      ],
    },
    {
      text: '回调与事件',
      items: [
        {
          text: '解析事件',
          collapsed: true,
          items: [
            { text: 'api.class.parse.before', link: '/zh/settings/events/api_class_parse_before' },
            { text: 'api.class.parse.after', link: '/zh/settings/events/api_class_parse_after' },
            { text: 'api.method.parse.before', link: '/zh/settings/events/api_method_parse_before' },
            { text: 'api.method.parse.after', link: '/zh/settings/events/api_method_parse_after' },
            { text: 'api.param.parse.before', link: '/zh/settings/events/api_param_parse_before' },
            { text: 'api.param.parse.after', link: '/zh/settings/events/api_param_parse_after' },
            { text: 'json.class.parse.before', link: '/zh/settings/events/json_class_parse_before' },
            { text: 'json.class.parse.after', link: '/zh/settings/events/json_class_parse_after' },
            { text: 'json.field.parse.before', link: '/zh/settings/events/json_field_parse_before' },
            { text: 'json.field.parse.after', link: '/zh/settings/events/json_field_parse_after' },
            { text: 'json.method.parse.before', link: '/zh/settings/events/json_method_parse_before' },
            { text: 'json.method.parse.after', link: '/zh/settings/events/json_method_parse_after' },
          ],
        },
        {
          text: '导出/调用事件',
          collapsed: true,
          items: [
            { text: 'export.after', link: '/zh/settings/rules/export_after' },
            { text: 'yapi.export.before', link: '/zh/settings/events/yapi_export_before' },
            { text: 'yapi.save.before', link: '/zh/settings/rules/yapi_save_before' },
            { text: 'yapi.save.after', link: '/zh/settings/rules/yapi_save_after' },
            { text: 'http.call.before', link: '/zh/settings/rules/http_call_before' },
            { text: 'http.call.after', link: '/zh/settings/rules/http_call_after' },
          ],
        },
      ],
    },
    {
      text: '脚本工具',
      items: [
        { text: '概览', link: '/zh/settings/tools' },
        { text: 'it', link: '/zh/settings/tools/it' },
        { text: 'tool', link: '/zh/settings/tools/tool' },
        { text: 'regex', link: '/zh/settings/tools/regex' },
        { text: 'logger', link: '/zh/settings/tools/logger' },
        { text: 'helper', link: '/zh/settings/tools/helper' },
        { text: 'httpClient', link: '/zh/settings/tools/httpClient' },
        { text: 'localStorage', link: '/zh/settings/tools/localStorage' },
        { text: 'session', link: '/zh/settings/tools/session' },
        { text: 'config', link: '/zh/settings/tools/config' },
        { text: 'api', link: '/zh/settings/tools/api' },
        { text: 'runtime', link: '/zh/settings/tools/runtime' },
        { text: 'fieldContext', link: '/zh/settings/tools/fieldContext' },
        { text: 'files', link: '/zh/settings/tools/files' },
      ],
    },
    {
      text: '高级',
      items: [
        { text: 'Groovy 本地扩展', link: '/zh/settings/advanced/groovy-ext-config' },
      ],
    },
  ]
}

function sidebarQA() {
  return [
    {
      text: 'Q&A',
      items: [
        { text: '概览', link: '/zh/qa/' },
        { text: '如何添加配置文件', link: '/zh/qa/add-config' },
        { text: '如何组织 API 到指定文件夹', link: '/zh/qa/group-apis-to-folder' },
        { text: '如何忽略 API', link: '/zh/qa/ignore-api' },
        { text: '如何设置 API/文件夹的名称/描述', link: '/zh/qa/api-doc' },
        { text: '如何在 API 描述中声明废弃', link: '/zh/qa/api-deprecated' },
        { text: '如何声明 API 需要的权限 (javax)', link: '/zh/qa/api-permission-javax' },
        { text: '如何声明 API 需要的权限 (Spring)', link: '/zh/qa/api-permission-spring' },
        { text: '如何忽略某些字段', link: '/zh/qa/ignore-fields' },
        { text: '如何将指定类型转换为另一种类型', link: '/zh/qa/type-convert' },
        { text: '部分接口可能有不同的返回', link: '/zh/qa/multiple-return-types' },
        { text: '有的字段可能有不同类型的值', link: '/zh/qa/field-multiple-types' },
        { text: '如何开启 javax.validation 分组校验', link: '/zh/qa/javax-validation-grouped' },
        { text: '如何激活 JsonIgnoreProperties 支持', link: '/zh/qa/json-ignore-properties' },
        { text: '导出时出现类过于复杂的提示如何处理', link: '/zh/qa/method-complex' },
      ],
    },
  ]
}
