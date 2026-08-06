# Custom 框架

当项目没有使用 EasyYapi 内置的框架识别器时，可以使用 **Custom** 框架通过配置规则描述项目自己的 API 约定。

与 Spring、JAX-RS、Feign 和 gRPC 支持不同，Custom 不包含固定的注解识别逻辑。类识别、方法识别、HTTP 方法、路径和参数绑定全部由 `custom.*` 规则决定。规则生成标准 API endpoint 后，所有已启用的导出渠道（包括 YApi）都可以直接使用这些接口。

## 启用 Custom

Custom 默认关闭。打开 **Settings** > **Other Settings** > **EasyApi** > **Features**，在 **Framework Support** 中启用 `custom`，然后在项目级或全局 `.easyapi/*.rules` 文件中添加规则。

Custom 的行标记也默认关闭。如果希望为规则识别出的类显示编辑器行标记，请打开 Custom 框架设置并启用 **line marker for Custom API classes**。

## 核心规则

| 规则 | 用途 |
|------|------|
| `custom.class.is.api` | 识别 API 类 |
| `custom.method.is.api` | 识别接口方法 |
| `custom.http.method` | 提供 HTTP 方法 |
| `custom.path` | 提供类路径或方法路径 |
| `custom.param.as.json.body` | 将参数绑定为 JSON 请求体 |
| `custom.param.as.form.body` | 将参数绑定为表单字段 |
| `custom.param.as.path.var` | 将参数绑定为路径变量 |
| `custom.param.as.cookie` | 将参数绑定为 Cookie |
| `custom.param.name` | 覆盖 query 或 form 参数名 |
| `custom.param.header` / `custom.param.cookie` | 提供 header 或 Cookie 名称 |

对于不需要精细分类的参数，可以使用 `param.http.type` 设置 `query`、`path`、`header`、`cookie`、`form` 或 `body`。更具体的 `custom.param.as.*` 分类规则优先级更高。

## 示例

下面是一个使用自定义注解的项目的起始示例。请根据项目实际约定替换注解名称和路径：

```properties
custom.class.is.api=groovy:it.hasAnn("com.example.ApiController")
custom.method.is.api=groovy:it.hasAnn("com.example.Api")
custom.http.method=groovy:it.ann("com.example.Api")?.value() ?: "GET"
custom.path=groovy:it.ann("com.example.Path")?.value() ?: ""
custom.param.as.json.body=groovy:it.hasAnn("com.example.JsonBody")
custom.param.as.path.var=groovy:it.hasAnn("com.example.PathVariable")
```

如果没有规则提供 HTTP 方法，解析器会依次回退到 `method.default.http.method`，最后使用 `POST`。最终路径会组合类路径、方法路径、`class.prefix.path` 和 `endpoint.prefix.path`，并规范化重复的斜杠。

## 生命周期钩子

Custom 还提供只在 Custom 提取过程中执行的框架级钩子：

- `custom.class.parse.before` / `custom.class.parse.after`
- `custom.method.parse.before` / `custom.method.parse.after`
- `custom.export.after`

通用的 API 解析和导出钩子仍然可用。

## 从通用导出规则迁移

v2 的 `mdoc.class.filter` 和 `mdoc.method.filter` 在 v3 重写后不再支持。请改用 Custom 识别器：

```properties
custom.class.is.api=groovy:it.hasAnn("com.example.ApiController")
custom.method.is.api=groovy:it.hasAnn("com.example.Api")
```

详见[配置规则](/zh/settings/config-rule)和[规则编写](/zh/settings/rule-authoring)。
