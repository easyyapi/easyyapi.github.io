# 导出到 Markdown

## 使用方法

### 方式一：右键导出

1. 打开项目中包含 API 的文件，或者在 IDEA 左边项目文件区域选择文件或文件夹
2. 鼠标右键点击文件内容或文件夹
3. 选择 `ExportMarkdown` 导出该文件或文件夹中所有的 API

### 方式二：快捷键导出

1. 打开项目中包含 API 的文件，或者在 IDEA 左边项目文件区域选择文件或文件夹
2. 使用快捷键 `Alt + Shift + E` (Windows/Linux) 或 `Ctrl + E` (macOS)
3. 选择要导出的 API，选择导出渠道 `Markdown`
4. 点击 ✔ 按钮或按回车键完成导出

## Markdown 可用设置

- **outputDemo**: 导出 Markdown 文档时，为每个 API 生成一个响应 demo
- **outputCharset**: 选择导出 Markdown 文档时使用的字符集，当导出文档出现乱码时可尝试修改此配置

详见 [IDE 设置](/zh/settings/ide-setting)。

## 自定义模板

::: tip v3.2.0 新增
自由格式的 Markdown 导出模板（支持国际化 i18n 与远程源）在 v3.2.0 中引入（#1411）。
下文所述的 Markdown 导出对话框与 `markdown.template*` 配置规则描述了完整体系。
:::

触发 Markdown 导出时，EasyYapi 会打开一个对话框，允许你覆盖输出位置与渲染文档所用的模板。该对话框提供以下字段：

| 字段 | 说明 |
|-------|-------------|
| 输出目录（Output Directory） | 生成 `.md` 文件的目标文件夹。留空则使用默认输出目录。 |
| 文件名（File Name） | 输出文件名（不含扩展名）。留空则使用默认名称。 |
| 模板文件（Template File） | 本地模板文件路径（`.tpl` 或 `.md.tpl`）。 |
| 模板 URL（Template URL） | 提供模板的远程 `http(s)` URL。响应会被缓存 10 分钟；**不**跟随重定向。 |
| 语言（Language） | 内置语言模板的下拉框（如 `zh-CN`、`ja`、`en`）。选择某个内置语言即以该语言模板渲染文档。 |
| 显示内联模板（Show inline template） | 展开多行文本框，可直接输入模板内容。 |
| 复制默认模板（Copy default template） | 将内置默认模板复制到内联区域，作为编辑起点。 |

### 模板解析顺序

解析器按以下层级依次查找，**首个非空且成功的层级胜出**。空值或失败（文件缺失、HTTP 错误、响应超限）的层级会被跳过，继续尝试下一层级。

1. 对话框中的**内联模板**（多行文本框）。
2. 对话框中的**本地模板文件**（Template File 字段）。
3. 对话框中的**远程模板 URL**（Template URL 字段）。
4. **`markdown.template` 配置规则**。其值会被自动检测：
   - `http(s)` URL 会远程拉取，
   - 单行路径会作为本地文件读取，
   - 其他内容（多行文本或使用双花括号占位符的内容）会作为内联模板内容处理。
5. **基于约定的项目文件** `<project>/.easyapi/markdown.tpl`（若存在）。团队只需提交该文件即可共享模板——无需配置 key。
6. 由 `markdown.template.language` 配置规则**或**语言下拉框选中的**内置语言模板**（下拉框优先）。
7. **内置 `default.md.tpl`** 作为兜底——始终存在。

::: tip 模板占位符使用双花括号
模板内容使用双花括号占位符来插值变量。当你在编写 Markdown **文档正文**（如本页）时，切勿把两个左花括号并排写出——VitePress/Vue 会将其解析为 Vue 插值，导致构建失败。在正文中请用“双花括号占位符”这一说法来指代。
:::

### 配置规则

| 规则 | 说明 |
|------|-------------|
| `markdown.template` | 自动检测的模板源（远程 URL、本地文件路径或内联内容）。取代旧的 `markdown.template.file` / `markdown.template.url` / 内联 `markdown.template`，这些旧 key 已合并为这一个 key。 |
| `markdown.template.language` | BCP-47 语言标签（如 `zh-CN`），用于选择内置语言模板。当精确标签未内置时，按 BCP-47 回退规则处理。 |
| `markdown.template.url.ttl.seconds` | 远程模板拉取的缓存 TTL。默认：`600`（10 分钟）。 |
| `markdown.template.url.max.bytes` | 远程模板拉取的最大响应大小。默认：`1048576`（1 MiB）。 |

::: note 旧 key 已合并
旧版分离的 `markdown.template.file`、`markdown.template.url` 与内联形式的 `markdown.template` 已合并为单一的 `markdown.template` key（第 4 层级）。当值以 `http://` 或 `https://` 开头时被自动识别为远程 URL，否则作为本地文件路径处理，再回退为内联内容。
:::

### 内置语言

EasyYapi 为以下语言内置了模板（`en` 默认使用内置的 `default.md.tpl`）：

`zh-CN`、`zh-TW`、`zh`、`ja`、`ko`、`es`、`fr`、`de`、`ru`、`pt-BR`、`pt`、`it`、`ar`、`hi`、`vi`、`id`、`tr`、`pl`、`uk`、`nl`、`th`、`en`。
