# MCP 客户端集成

自 v3.2.6 起，EasyYapi 向 IntelliJ IDEA 内置的 MCP（Model Context Protocol）服务器添加了两个工具，让连接到 IDE 的外部 Agent 可以驱动 EasyYapi，且全程无对话框：

- `easyapi_scan_endpoints` —— 只读：报告 Agent 指定的类、方法或源文件对应的、EasyYapi 将会导出的端点。
- `easyapi_export` —— 将这些端点导出到 YApi，与[导出到 YApi](./export2yapi)行为一致，且无任何对话框。

与在 IDE 内部工作、替你编写规则的内置 AI 助手不同，这两个工具让外部 Agent 驱动正在运行的 EasyYapi。每个工具都会向客户端描述自己的参数、返回结果和错误码；本页介绍围绕它们的工作流程。

## 准备工作

1. IntelliJ IDEA 2025.2 或更高版本，并启用内置的 **MCP Server** 插件。
2. 在 <kbd>Settings</kbd> > <kbd>Tools</kbd> > <kbd>MCP Server</kbd> 中打开服务器，然后按照 [IntelliJ IDEA MCP Server 文档](https://www.jetbrains.com/help/idea/mcp-server.html)连接你的客户端。
3. 如果该页面列出了服务器暴露的工具，请确认 `easyapi_scan_endpoints` 和 `easyapi_export` 已启用。
4. 对于 `easyapi_export`，需要先配置好 YApi —— 参见 [YApi 配置](/zh/settings/yapi)。

## 扫描端点

Agent 通过 `classes`、`methods`（`ClassName#methodName`）或 `files`（相对于项目根目录的路径）指定目标，并通过 `projectPath` 指定项目（参见[选择项目](#选择项目)）。只扫描指定的目标，使用与普通导出相同的扫描器和规则；所有目标都必须能解析，否则什么都不扫描。没有端点的目标——请求或响应模型、Service、未映射的方法、或导出失败的类（见 `idea.log`）——会带上原因列在 `skipped` 中；如果你改动过模型或 Service，请改用使用它们的控制器或方法。

### 在 IDE 之外改动的文件

在目标解析之前，IDE 会从磁盘加载目标所在的文件，以及它已注意到的项目根目录下的其他改动，因此 Agent 刚写完文件就发起的调用能看到新内容。对于在 IDE 之外创建的类，通过 `files` 传入它的文件。

- **IDE 中未保存的改动会中止调用**（`UNSAVED_IN_IDE`）：当它们位于待扫描文件中，或位于项目根目录下另一个同时在磁盘上改动过的文件中时。保存它们，或用 **File | Reload from Disk** 丢弃 IDE 中的改动。
- **IntelliJ IDEA 2025.2 中，模态对话框会中止调用。**该版本只在没有模态对话框（如 Settings）打开时加载文件，因此调用会在约 10 秒后以 `SYNC_TIMEOUT` 失败，即使没有任何文件改动。更高版本在对话框打开时也能加载文件。
- **限制：**与目标一起改动的请求或响应类可能尚未重新加载，或在项目根目录之外完全不会重新加载：将它的文件加入 `files`（根目录之外的，将类名加入 `classes`）；它会如预期出现在 `skipped` 中。不是目标、在编辑器中有未保存改动、同时在磁盘上改动过的文件，可能按编辑器显示的内容被扫描：调用前请先保存。

## 导出到 YApi

`easyapi_export` 与扫描工具一样接收目标（含同步），然后运行 **Export to YAPI** 的导出，使用相同的规则、服务器和导出模式，且无任何对话框。`channel` 为 `yapi`，是默认值，也是目前唯一的值。导出陈旧代码仍会成功，因此请注意上述限制。

### Token

调用不会向你询问任何东西：缺失的服务器或 Token 会直接体现在返回结果中。

1. 在 <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd> 中填写 **Yapi Server**。
2. 通过 `options.token` 传入 Token（先用 YApi 校验，从不保存；该调用的所有端点都会进入此 Token 对应的项目），或在同一页面的 **Tokens** 下添加 `<destination>=<token>`。端点的目标位置由它的 `yapi.project` 规则决定（内置规则将 `@project` 和 `@module` 文档标签映射到该规则），否则取其类的模块，再否则取项目名。

### 写入结果

返回结果中每个端点对应一项：

- `updated`：具有相同路径和方法的 API 被覆盖。YApi 在整个项目中按路径和方法匹配，因此在其他目录中的同名 API 会被移入目标目录（`movedFrom`），无论导出模式如何；该目录可能被置空。
- `created`：保存前在 YApi 项目中未找到同名 API。
- `not_written`：由 **Export Mode** 保留（`NEVER_UPDATE`，或 `UPDATE_IF_CHANGED` 且无变化时；`ALWAYS_ASK` 视为同意），或未被 YApi 接受（如 gRPC 端点）；`reason` 会说明是哪一种。
- `failed`：`reason` 说明原因；没有 Token 的目标位置只会让该位置的端点失败。只要有一个端点未失败，调用即视为成功，因此 `failed` 大于 0 表示部分导出。

不会出现对话框或成功通知；与普通导出一样，规则失败的警告仍会出现。

## 选择项目

每次调用都传入 `projectPath`：项目根目录或其中任意位置的绝对路径，例如 Agent 的工作目录。包含它的最内层已打开项目会应答，且每个成功结果中的 `project` 会指明该项目。不传 `projectPath` 时，若打开了多个项目，调用会以 `PROJECT_AMBIGUOUS` 失败；若只打开一个项目，IntelliJ IDEA 2025.2 会接受。更高版本的 IDE 会在工具运行前检查项目，并用它们自己的错误文本拒绝无法定位的调用，而不是返回 `{"error": …}` 结果。

## 错误码

调用失败时返回 `{"error": {"code": …, "message": …}}` 而不是结果；message 会说明该如何处理。

| `code` | 含义 |
|--------|------|
| `TARGETS_REQUIRED` | 未指定任何目标。 |
| `TARGETS_UNRESOLVED` | 有目标无法解析；`failures` 逐个列出。 |
| `NO_ENDPOINTS` | 没有目标能产生端点；`skipped` 说明原因。 |
| `TARGETS_CHANGED` | 目标在扫描过程中发生变化。请重试。 |
| `INDEX_NOT_READY` | IDE 正在索引（如在大量文件一次性在 IDE 外改动后）。索引完成后重试。 |
| `UNSAVED_IN_IDE` | 列出的 `files` 在 IDE 中有未保存的改动。保存或重新加载后重试。 |
| `SYNC_TIMEOUT` | IDE 未能在 10 秒内加载在 IDE 之外改动的文件。重试；若再次超时，请关闭 IDE 中打开的模态对话框（如 Settings），稍后重试。 |
| `CHANNEL_NOT_FOUND` | 导出：未知渠道；`channels` 列出可导出的渠道。 |
| `CHANNEL_NOT_SUPPORTED` | 导出：该渠道需要对话框；`channels` 列出可导出的渠道。 |
| `CHANNEL_DISABLED` | 导出：请在 <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Features</kbd> 中打开该渠道。 |
| `OPTIONS_INVALID` | 导出：未知选项或空值；`acceptedOptions` 列出可接受的选项。 |
| `EXPORT_FAILED` | 导出：什么都没写入；`items` 在已知时逐个列出端点。 |
| `PROJECT_AMBIGUOUS` | 打开了多个项目且未传 `projectPath`。 |
| `PROJECT_NOT_FOUND` | 没有已打开的项目包含 `projectPath`。 |
| `INTERNAL_ERROR` | 发生了意外错误；见 `idea.log`。 |

::: warning Token 与 idea.log
Token 不会出现在返回结果、错误信息或工具写入 EasyYapi 控制台的内容中。但 EasyYapi 的 HTTP 日志会把每个请求地址写入 `idea.log`，而 YApi 的 GET 请求地址中带有 Token，因此导出使用过的 Token（传入的或来自 Token 表的）会以明文落入 `idea.log`，与在 IDE 中使用 **Export to YAPI** 相同。
:::
