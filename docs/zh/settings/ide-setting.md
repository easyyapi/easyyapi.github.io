# IDE 设置

EasyYapi 提供了 IDE 级别的设置，可以在 IDEA 中进行配置。

## 打开设置

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## 通用设置

| 设置项 | 说明 |
|--------|------|
| postman.url | Postman 导出 URL |
| postman.token | Postman API Token |
| yapi.server | YApi 服务器地址 |
| yapi.token | YApi 项目 Token |
| project.name | 项目名称 |

## 导出设置

| 设置项 | 说明 |
|--------|------|
| outputDemo | 导出 Markdown 时生成响应 demo |
| outputCharset | 导出字符集 |

## 框架开关

| 设置项 | 说明 | 默认值 |
|--------|------|--------|
| feignEnable | 启用 Feign 客户端支持 | `false` |
| jaxrsEnable | 启用 JAX-RS 支持 | `true` |
| actuatorEnable | 启用 Spring Actuator 支持 | `false` |
| grpcEnable | 启用 gRPC 支持 | `true` |
| swaggerEnable | 启用 Swagger 支持 | `true` |
| swagger3Enable | 启用 Swagger 3 / OpenAPI 支持 | `true` |

## 推荐配置

EasyYapi 内置了推荐配置，可以在设置中启用。推荐配置包含常用的规则和类型转换。

## Features 标签页

EasyYapi 3.2 使用 **Features** 标签页统一管理扩展点的启用状态。列表会根据已安装的插件组件动态生成：

| 分区 | 控制内容 |
|------|----------|
| **API Features** | API 扫描（总开关，默认开启），包含嵌套的自动 API 扫描（默认开启）和并发 API 扫描（默认关闭），以及编辑器集成（行标记图标，默认开启，依赖 API 扫描）。 |
| **Framework Support** | Feign、JAX-RS、Actuator、gRPC 和 Custom 等框架识别器。 |
| **Export Channels** | YApi、Postman、Markdown、cURL、HttpClient、Hoppscotch (Beta) 和 OpenAPI (Beta) 等导出渠道。实验性渠道默认关闭。 |
| **Field Format Channels** | JSON、JSON5、Properties、YAML 等字段格式化渠道。 |

大部分框架识别器、导出渠道、字段格式化渠道和扩展配置都可以在 Settings 中启用或关闭。API 扫描、自动/并发扫描和编辑器集成现在在 **Features** 标签页（API Features 分组）中控制。**Features** 标签页中的 **API Scanning** 开关是 API 发现的总开关。功能更改立即生效，无需重启 IDE。

关闭自动 API 扫描后，手动重新扫描仍然可用。禁用 API 扫描会自动禁用自动 API 扫描、并发 API 扫描和编辑器集成。

## cURL

cURL 设置页控制变量渲染，以及批量导出和 Dashboard **Copy as cURL** 使用的默认值：

| 设置项 | 说明 |
|--------|------|
| **Render mode** | 保留占位符、使用当前环境解析，或每次导出询问。环境值优先于配置读取器的值。 |
| **Copy from edited** | 复制 cURL 时使用 Dashboard 中编辑后的接口，而不是源代码接口。 |
| **Include comments and section dividers** | 在批量脚本中添加接口标题和分隔线。 |
| **Pretty-print JSON body** | 为 JSON 请求体添加缩进。 |
| **Multi-line format** | 每行输出一个 cURL 参数。 |
| **Long flags** | 使用 `--request`、`--header`、`--data`、`--form` 等长参数名。 |
| **Response example** | 将可用的响应体示例追加为注释。 |
| **Run pre-request scripts** | 批量导出执行文件夹/类脚本，单接口复制还会执行接口级脚本。 |

导出对话框可以针对单次导出覆盖格式化和请求前脚本选项。

## OpenAPI (Beta)

OpenAPI 导出默认关闭。通过 **Features** 启用后，OpenAPI 设置页可以选择 **JSON**、**YAML** 或 **Ask each export**。默认文件名为 `openapi.json` 和 `openapi.yaml`。

文档级元数据通过 `openapi.info.title`、`openapi.info.version`、`openapi.info.description` 和 `openapi.server.url` 规则配置，也兼容旧的 `openapi.host`。详见[导出到 OpenAPI](/zh/guide/export-openapi)。

## Markdown

Markdown 设置标签页是一个持久化的渠道标签页，用于控制 Markdown 导出所用的模板。这些设置在每次导出时复用——导出对话框只询问输出目录和文件名。

| 设置项 | 说明 |
|--------|------|
| **Template File（模板文件）** | 本地模板文件路径（`.tpl` 或 `.md.tpl`）。 |
| **Template URL（模板 URL）** | 提供模板的远程 `http(s)` URL。响应会被缓存 10 分钟；**不**跟随重定向。 |
| **Language（语言）** | 内置语言模板的下拉框（如 `zh-CN`、`ja`、`en`）。选择某个内置语言即以该语言模板渲染文档。 |
| **Show inline template（显示内联模板）** | 切换内联模板编辑器——一个多行文本框，可直接输入模板内容。 |
| **Copy default template（复制默认模板）** | 将内置默认模板保存到文件，作为编辑起点。 |

模板解析顺序与 `markdown.template*` 配置规则详见[导出到 Markdown](/zh/guide/export2markdown)。

## Custom 框架

Custom 框架默认关闭，可以在 **Features** > **Framework Support** 中启用。它提供可选的行标记开关；实际接口提取由 `custom.*` 规则控制。详见 [Custom 框架](/zh/framework/custom)。
