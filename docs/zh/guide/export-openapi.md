# 导出到 OpenAPI

::: warning Beta 功能
OpenAPI 导出渠道默认关闭，使用前请先在 **Features** 标签页中启用。
:::

EasyYapi 可以将 HTTP 接口导出为 [OpenAPI](https://www.openapis.org/) 3.0.3 文档。生成的文档可以交给 OpenAPI 工具处理、导入 API 网关，或作为 API 契约提交到代码仓库。

## 启用渠道

打开 **Settings** > **Other Settings** > **EasyApi** > **Features**，在 **Export Channels** 中启用 **OpenAPI (Beta)**。启用后，该渠道会出现在导出对话框和 OpenAPI 导出操作中。

## 导出

1. 打开包含 API 的文件，或在 Project 视图中选择文件/文件夹。
2. 选择 **EasyYapi** > **Export** > **OpenAPI (Beta)**，也可以从 API Dashboard 使用 OpenAPI 操作。
3. 如果 OpenAPI 设置中没有保存输出格式，按提示选择格式。
4. 选择目标文件。

JSON 默认写入 `openapi.json`，YAML 默认写入 `openapi.yaml`。可以在导出对话框中覆盖输出目录和文件名。

该渠道只支持 HTTP。由于此导出器不表示 gRPC，选择中的 gRPC 接口会被跳过。如果选择中没有 HTTP 接口，导出会提示没有可导出的内容。

## 输出内容

导出的 OpenAPI 3.0.3 文档包含：

- `info.title`、`info.version` 和可选的描述
- 可选的 `servers` 地址
- 路径、操作和唯一的 operation ID
- query、path、header、cookie 参数
- JSON 请求体
- `application/x-www-form-urlencoded` 和 multipart 请求体，包括文件字段
- 响应结构和可复用的 components schema
- 从 API 文件夹或源代码类名生成的 tags
- 可用时导出枚举值和参数示例

Path 参数始终标记为必填，这是 OpenAPI 规范的要求。没有返回模型的无返回值接口会输出为 `204 No content`。

## 文档元数据规则

如果希望文档的基本信息不随本次导出的接口选择变化，可以在项目规则中设置：

```properties
openapi.info.title=Public API
openapi.info.version=2026.1
openapi.info.description=HTTP API for the public application
openapi.server.url=https://api.example.com
```

推荐使用 `openapi.server.url` 设置服务器地址，也兼容旧的 `openapi.host`。`openapi.format.after` 事件会在文档构建完成、序列化之前执行，可用于在写入 JSON 或 YAML 前修改内存中的文档。

详见[配置规则](/zh/settings/config-rule)。
