import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  description: 'IntelliJ IDEA plugin for generating API documentation from Java/Kotlin code',

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/framework/': sidebarFramework(),
      '/settings/': sidebarSettings(),
      '/qa/': sidebarQA(),
    },

    editLink: {
      pattern: 'https://github.com/easyyapi/easyyapi.github.io/edit/dev/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright 2019-present tangcent',
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tangcent/easy-yapi' },
    ],
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Framework', link: '/framework/', activeMatch: '/framework/' },
    { text: 'Settings', link: '/settings/', activeMatch: '/settings/' },
    { text: 'QA', link: '/qa/', activeMatch: '/qa/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Usage', link: '/guide/use' },
      ],
    },
    {
      text: 'Export',
      items: [
        { text: 'Export to YApi', link: '/guide/export2yapi' },
        { text: 'Export to Postman', link: '/guide/export2postman' },
        { text: 'Export to Markdown', link: '/guide/export2markdown' },
        { text: 'Export to cURL', link: '/guide/export2curl' },
        { text: 'Export to HttpClient', link: '/guide/export2httpclient' },
        { text: 'Export Method Doc', link: '/guide/export-method-doc' },
        { text: 'Export RPC Doc', link: '/guide/export-rpc' },
        { text: 'Legacy YApi / Custom YApi', link: '/guide/login-mode-yapi' },
      ],
    },
    {
      text: 'Advanced',
      items: [
        { text: 'Advanced Usage', link: '/guide/advanced-use' },
        { text: 'Call API', link: '/guide/call' },
        { text: 'Generic', link: '/guide/generic' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Comment Standards', link: '/guide/docs' },
        { text: 'Javadoc Demo', link: '/guide/javadoc-demo' },
        { text: 'Plugin Knowledge Base (AI)', link: '/guide/knowledge-base' },
        { text: 'Script Executor', link: '/guide/script-executor' },
      ],
    },
  ]
}

function sidebarFramework() {
  return [
    {
      text: 'Framework Support',
      items: [
        { text: 'Overview', link: '/framework/' },
        { text: 'Spring Boot', link: '/framework/springboot' },
        { text: 'Spring Boot WebFlux', link: '/framework/springboot-webflux' },
        { text: 'Spring Actuator', link: '/framework/actuator' },
        { text: 'Spring Configuration', link: '/framework/spring-configuration' },
        { text: 'Swagger', link: '/framework/swagger' },
        { text: 'Swagger 3', link: '/framework/swagger3' },
        { text: 'JAX-RS', link: '/framework/jaxrs' },
        { text: 'gRPC', link: '/framework/grpc' },
        { text: 'javax.validation', link: '/framework/javax-validation' },
        { text: 'Jakarta Validation', link: '/framework/jakarta-validation' },
        { text: 'Jackson', link: '/framework/jackson' },
        { text: 'Gson', link: '/framework/gson' },
        { text: 'Fastjson', link: '/framework/fastjson' },
      ],
    },
    {
      text: 'Built-in Extensions',
      items: [
        { text: 'Deprecated & Converts', link: '/framework/deprecated-converts' },
        { text: 'Field Order', link: '/framework/field-order' },
      ],
    },
  ]
}

function sidebarSettings() {
  return [
    {
      text: 'Configuration',
      items: [
        { text: 'Overview', link: '/settings/' },
        { text: 'IDE Settings', link: '/settings/ide-setting' },
        { text: 'Local Config File', link: '/settings/local-file-config' },
        { text: 'Remote Config File', link: '/settings/remote-config' },
        { text: 'YApi Settings', link: '/settings/yapi' },
        { text: 'Postman Settings', link: '/settings/postman' },
        { text: 'YApi Mock', link: '/settings/yapi-mock' },
        { text: 'Markdown Template', link: '/settings/template' },
      ],
    },
    {
      text: 'Config Rules',
      items: [
        { text: 'Available Rules', link: '/settings/config-rule' },
        {
          text: 'API Rules',
          collapsed: true,
          items: [
            { text: 'api.name', link: '/settings/rules/api_name' },
            { text: 'api.open', link: '/settings/rules/api_open' },
            { text: 'api.status', link: '/settings/rules/api_status' },
            { text: 'api.tag', link: '/settings/rules/api_tag' },
          ],
        },
        {
          text: 'Class Rules',
          collapsed: true,
          items: [
            { text: 'class.doc', link: '/settings/rules/class_doc' },
            { text: 'class.is.ctrl', link: '/settings/rules/class_is_ctrl' },
            { text: 'class.is.spring.ctrl', link: '/settings/rules/class_is_spring_ctrl' },
            { text: 'class.is.feign.ctrl', link: '/settings/rules/class_is_feign_ctrl' },
            { text: 'class.is.jaxrs.ctrl', link: '/settings/rules/class_is_jaxrs_ctrl' },
            { text: 'class.is.quarkus.ctrl', link: '/settings/rules/class_is_quarkus_ctrl' },
            { text: 'class.is.grpc', link: '/settings/rules/class_is_grpc' },
            { text: 'class.prefix.path', link: '/settings/rules/class_prefix_path' },
          ],
        },
        {
          text: 'Field Rules',
          collapsed: true,
          items: [
            { text: 'field.default.value', link: '/settings/rules/field_default_value' },
            { text: 'field.demo', link: '/settings/rules/field_demo' },
            { text: 'field.doc', link: '/settings/rules/field_doc' },
            { text: 'field.ignore', link: '/settings/rules/field_ignore' },
            { text: 'field.mock', link: '/settings/rules/field_mock' },
            { text: 'field.name', link: '/settings/rules/field_name' },
            { text: 'field.name.prefix', link: '/settings/rules/field_name_prefix' },
            { text: 'field.name.suffix', link: '/settings/rules/field_name_suffix' },
            { text: 'field.required', link: '/settings/rules/field_required' },
            { text: 'field.order', link: '/settings/rules/field_order' },
            { text: 'field.order.with', link: '/settings/rules/field_order_with' },
            { text: 'field.advanced', link: '/settings/rules/field_advanced' },
            { text: 'field.max.depth', link: '/settings/rules/field_max_depth' },
          ],
        },
        {
          text: 'Method Rules',
          collapsed: true,
          items: [
            { text: 'method.doc', link: '/settings/rules/method_doc' },
            { text: 'method.return', link: '/settings/rules/method_return' },
            { text: 'method.return.main', link: '/settings/rules/method_return_main' },
            { text: 'method.content.type', link: '/settings/rules/method_content_type' },
            { text: 'method.default.http.method', link: '/settings/rules/method_default_http_method' },
            { text: 'method.additional.header', link: '/settings/rules/method_additional_header' },
            { text: 'method.additional.param', link: '/settings/rules/method_additional_param' },
            { text: 'method.additional.response.header', link: '/settings/rules/method_additional_response_header' },
          ],
        },
        {
          text: 'Param Rules',
          collapsed: true,
          items: [
            { text: 'param.default.value', link: '/settings/rules/param_default_value' },
            { text: 'param.demo', link: '/settings/rules/param_demo' },
            { text: 'param.doc', link: '/settings/rules/param_doc' },
            { text: 'param.http.type', link: '/settings/rules/param_http_type' },
            { text: 'param.ignore', link: '/settings/rules/param_ignore' },
            { text: 'param.name', link: '/settings/rules/param_name' },
            { text: 'param.required', link: '/settings/rules/param_required' },
            { text: 'param.type', link: '/settings/rules/param_type' },
            { text: 'param.mock', link: '/settings/rules/param_mock' },
            { text: 'param.max.depth', link: '/settings/rules/param_max_depth' },
          ],
        },
        {
          text: 'Enum Rules',
          collapsed: true,
          items: [
            { text: 'enum.use.custom', link: '/settings/rules/enum_use_custom' },
          ],
        },
        {
          text: 'JSON Rules',
          collapsed: true,
          items: [
            { text: 'json.rule.convert', link: '/settings/rules/json_rule_convert' },
            { text: 'json.additional.field', link: '/settings/rules/json_additional_field' },
            { text: 'json.unwrapped', link: '/settings/rules/json_unwrapped' },
            { text: 'json.rule.field.ignore', link: '/settings/rules/json_rule_field_ignore' },
            { text: 'json.rule.field.name', link: '/settings/rules/json_rule_field_name' },
          ],
        },
        {
          text: 'Postman Rules',
          collapsed: true,
          items: [
            { text: 'postman.host', link: '/settings/rules/postman_host' },
            { text: 'postman.prerequest', link: '/settings/rules/postman_prerequest' },
            { text: 'postman.test', link: '/settings/rules/postman_test' },
            { text: 'postman.class.prerequest', link: '/settings/rules/postman_class_prerequest' },
            { text: 'postman.class.test', link: '/settings/rules/postman_class_test' },
            { text: 'postman.collection.prerequest', link: '/settings/rules/postman_collection_prerequest' },
            { text: 'postman.collection.test', link: '/settings/rules/postman_collection_test' },
            { text: 'postman.format.after', link: '/settings/rules/postman_format_after' },
          ],
        },
        {
          text: 'Other Rules',
          collapsed: true,
          items: [
            { text: 'folder.name', link: '/settings/rules/folder_name' },
            { text: 'module', link: '/settings/rules/module' },
            { text: 'yapi.project', link: '/settings/rules/yapi_project' },
            { text: 'ignore', link: '/settings/rules/ignore' },
            { text: 'constant.field.ignore', link: '/settings/rules/constant_field_ignore' },
            { text: 'endpoint.prefix.path', link: '/settings/rules/endpoint_prefix_path' },
            { text: 'path.multi', link: '/settings/rules/path_multi' },
          ],
        },
      ],
    },
    {
      text: 'Callbacks & Events',
      items: [
        {
          text: 'Parse Events',
          collapsed: true,
          items: [
            { text: 'api.class.parse.before', link: '/settings/events/api_class_parse_before' },
            { text: 'api.class.parse.after', link: '/settings/events/api_class_parse_after' },
            { text: 'api.method.parse.before', link: '/settings/events/api_method_parse_before' },
            { text: 'api.method.parse.after', link: '/settings/events/api_method_parse_after' },
            { text: 'api.param.parse.before', link: '/settings/events/api_param_parse_before' },
            { text: 'api.param.parse.after', link: '/settings/events/api_param_parse_after' },
            { text: 'json.class.parse.before', link: '/settings/events/json_class_parse_before' },
            { text: 'json.class.parse.after', link: '/settings/events/json_class_parse_after' },
            { text: 'json.field.parse.before', link: '/settings/events/json_field_parse_before' },
            { text: 'json.field.parse.after', link: '/settings/events/json_field_parse_after' },
            { text: 'json.method.parse.before', link: '/settings/events/json_method_parse_before' },
            { text: 'json.method.parse.after', link: '/settings/events/json_method_parse_after' },
          ],
        },
        {
          text: 'Export/Call Events',
          collapsed: true,
          items: [
            { text: 'export.after', link: '/settings/rules/export_after' },
            { text: 'yapi.export.before', link: '/settings/events/yapi_export_before' },
            { text: 'yapi.save.before', link: '/settings/rules/yapi_save_before' },
            { text: 'yapi.save.after', link: '/settings/rules/yapi_save_after' },
            { text: 'http.call.before', link: '/settings/rules/http_call_before' },
            { text: 'http.call.after', link: '/settings/rules/http_call_after' },
          ],
        },
      ],
    },
    {
      text: 'Script Tools',
      items: [
        { text: 'Overview', link: '/settings/tools' },
        { text: 'it', link: '/settings/tools/it' },
        { text: 'tool', link: '/settings/tools/tool' },
        { text: 'regex', link: '/settings/tools/regex' },
        { text: 'logger', link: '/settings/tools/logger' },
        { text: 'helper', link: '/settings/tools/helper' },
        { text: 'httpClient', link: '/settings/tools/httpClient' },
        { text: 'localStorage', link: '/settings/tools/localStorage' },
        { text: 'session', link: '/settings/tools/session' },
        { text: 'config', link: '/settings/tools/config' },
        { text: 'api', link: '/settings/tools/api' },
        { text: 'runtime', link: '/settings/tools/runtime' },
        { text: 'fieldContext', link: '/settings/tools/fieldContext' },
        { text: 'files', link: '/settings/tools/files' },
      ],
    },
    {
      text: 'Advanced',
      items: [
        { text: 'Groovy Local Extension', link: '/settings/advanced/groovy-ext-config' },
      ],
    },
  ]
}

function sidebarQA() {
  return [
    {
      text: 'Q&A',
      items: [
        { text: 'Overview', link: '/qa/' },
        { text: 'How to add config file', link: '/qa/add-config' },
        { text: 'How to group APIs to folder', link: '/qa/group-apis-to-folder' },
        { text: 'How to ignore API', link: '/qa/ignore-api' },
        { text: 'How to set API/folder name/description', link: '/qa/api-doc' },
        { text: 'How to mark API as deprecated', link: '/qa/api-deprecated' },
        { text: 'How to declare API permission (javax)', link: '/qa/api-permission-javax' },
        { text: 'How to declare API permission (Spring)', link: '/qa/api-permission-spring' },
        { text: 'How to ignore fields', link: '/qa/ignore-fields' },
        { text: 'How to convert type', link: '/qa/type-convert' },
        { text: 'Multiple return types', link: '/qa/multiple-return-types' },
        { text: 'Field with multiple types', link: '/qa/field-multiple-types' },
        { text: 'Enable javax.validation groups', link: '/qa/javax-validation-grouped' },
        { text: 'Activate JsonIgnoreProperties', link: '/qa/json-ignore-properties' },
        { text: 'Complex class blocked', link: '/qa/method-complex' },
      ],
    },
  ]
}
