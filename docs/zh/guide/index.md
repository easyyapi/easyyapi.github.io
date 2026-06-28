# 介绍

EasyYapi 是一个 IntelliJ IDEA 插件，基于 [Javadoc](./docs.md#javadoc)、[KDoc](./docs.md#kdoc) 和 [ScalaDoc](./docs.md#scaladoc) 解析生成 API 文档。

你可以在保持代码零侵入的情况下得到相当完整的 API 文档，但是特殊的需求还是需要部分特殊的注释/注解配合。与之相对的是，你可以灵活地运用[配置规则](/zh/settings/)来适应你的项目特性以减少代码侵入。

## 功能特性

- [导出 API 文档](./use.md)
- [在 IDEA 中直接发起 API 请求](./call.md)
- [AI 辅助规则编写](/zh/settings/rule-authoring#内置-ai-助手)——用自然语言描述需求，助手为你生成规则文件
- [Postman 环境同步](./call.md#api-dashboard)——将 Postman 环境同步到 API Dashboard，支持内联编辑

## 开箱即用

EasyApi 开箱即用地支持标准 HTTP 框架（Spring MVC、WebFlux、JAX-RS、Feign）—— **大多数项目无需自定义规则**。对于扫描器无法察觉的自定义框架行为（例如要求添加请求头的 `jakarta.servlet.Filter`，或将每个响应包装在信封中的 `ResponseBodyAdvice`），可使用内置的 AI 助手或外部 skill 来检测并生成规则。完整的自定义模式目录请参见 [Rule Authoring Guide](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md)。

## 支持项列表

| 类别 | 默认支持 | 额外支持 |
|------|---------|---------|
| 语言 | Java, Kotlin | Scala |
| Web 框架 | [Spring](https://spring.io/)、[Spring WebFlux](https://docs.spring.io/spring-framework/reference/web/webflux.html)、[Feign](https://spring.io/projects/spring-cloud-openfeign)、[JAX-RS](https://www.oracle.com/technical-resources/articles/java/jax-rs.html) ([Quarkus](https://quarkus.io/) / [Jersey](https://eclipse-ee4j.github.io/jersey/))、[gRPC](https://grpc.io/) | - |
| 导出渠道 | [Postman](./export2postman.md)、[YApi](./export2yapi.md)、[Markdown](./export2markdown.md)、[cURL](./export2curl.md)、[HttpClient](./export2httpclient.md) | - |
| 常用框架 | javax.validation、Jakarta Validation、Jackson、Gson | [Swagger](https://swagger.io/)、Fastjson |
| 功能特性 | [API 调用](./call.md)、[API Dashboard](./call.md#api-dashboard)、[编辑器行标记导航](./call.md#编辑器行标记导航)、[脚本执行器](./script-executor.md)、[AI 辅助规则编写](/zh/settings/rule-authoring) | Spring Actuator |

## 社区

- 讨论[新功能](https://github.com/tangcent/easy-yapi/issues?q=label%3Aenhancement)或提交 [BUG](https://github.com/tangcent/easy-yapi/issues?q=label%3Abug): [Issues](https://github.com/tangcent/easy-yapi/issues)
- 开发[新功能](https://github.com/tangcent/easy-yapi/pulls?q=+label%3Aenhancement)或修复 [BUG](https://github.com/tangcent/easy-yapi/pulls?q=+label%3Abug): [Pull Requests](https://github.com/tangcent/easy-yapi/pulls)

## 贡献者

<a href="https://github.com/tangcent/easy-yapi/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tangcent/easy-yapi" />
</a>
