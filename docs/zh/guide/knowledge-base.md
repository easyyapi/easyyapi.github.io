# 插件知识库 (AI)

本页为 AI 助手提供知识库，帮助其更好地理解和使用 EasyYapi 插件。它也是规则页签中 **Help** 按钮打开的页面。

## 什么是 EasyYapi？

EasyYapi 是一个 IntelliJ IDEA 插件，基于 Javadoc、KDoc 和 ScalaDoc 注释从 Java/Kotlin 源代码生成 API 文档。

## 开箱即用

EasyApi 开箱即用地支持标准 HTTP 框架（Spring MVC、WebFlux、JAX-RS、Feign）—— **大多数项目无需自定义规则**。对于扫描器无法察觉的自定义框架行为（例如要求添加请求头的 `jakarta.servlet.Filter`，或将每个响应包装在信封中的 `ResponseBodyAdvice`），可使用内置的 AI 助手或外部 skill 来检测并生成规则。完整指南请参见 [规则编写](/zh/settings/rule-authoring)。

## 关键概念

- **基于文件夹的规则文件** (3.0+)：项目（`<project>/.easyapi/`）和全局（`~/.easyapi/`）作用域下的 `.easyapi/*.rules` —— 自动发现，变更时自动重载。传统的 `.easy.api.config*` 文件仍会被读取以保持向后兼容。
- **内置 AI 助手**：一个与供应商无关的 AI 服务（基于 LangChain4j）嵌入在规则页签中（Chat / Magic 按钮）。用自然语言编写规则，并且不会在未经明确批准的情况下写入文件。
- **外部 `easy-yapi-assistant` skill**：你可以安装的 skill（`npx skills add tangcent/easy-yapi -g -y`），以便外部 AI 编码助手（Trae、Cursor、Cline、Continue 等）从与内置助手相同的知识库编写规则。
- **配置规则**：自定义文档生成的键值对。参见 [可用配置规则](/zh/settings/config-rule)。
- **Groovy 脚本**：通过 `groovy:` 前缀实现的高级自定义。参见 [脚本工具](/zh/settings/tools)。
- **解析事件**：在解析过程中特定时刻执行的回调。参见 [回调与事件](/zh/settings/)。
- **脚本工具**：Groovy 脚本中可用的内置工具。

## 编写规则的方式

EasyYapi 3.x 提供 **两种方式** 编写规则。两者都写入 `.easyapi/*.rules` 文件。完整指南请参见 [规则编写](/zh/settings/rule-authoring)。

| 方式 | 适用于 |
|--------|----------|
| [内置 AI 助手](/zh/settings/rule-authoring#内置-ai-助手) | 在 Settings → Rules → Chat / Magic 中用自然语言创建规则 |
| [外部 `easy-yapi-assistant` skill](/zh/settings/rule-authoring#外部-easy-yapi-assistant-skill) | 从外部 AI 编码助手驱动规则编写 |

## 常见工作流

1. 从 JetBrains Marketplace 安装插件
2. 为代码添加 Javadoc/KDoc 注释
3. （可选）通过 AI 助手或外部 skill 在 `.easyapi/*.rules` 文件中编写规则
4. 将文档导出到 YApi、Postman 或 Markdown

## 配置文件位置

- **项目规则 (3.0+)**: `<project>/.easyapi/*.rules`
- **全局规则 (3.0+)**: `~/.easyapi/*.rules`
- **传统项目配置**: `.easy.api.config`（仍会被读取以保持向后兼容）
- **远程**：通过 `remote.url` 配置
