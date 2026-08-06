# 导出为 cURL

将 API 定义导出为 cURL 命令。

## 使用方法

### 方法一：右键导出

1. 在项目中打开包含 API 的文件，或在 IDEA 项目面板中选择文件/文件夹
2. 右键点击文件内容或文件夹
3. 选择 `ExportCurl` 导出文件或文件夹中的所有 API

### 方法二：快捷键导出

1. 在项目中打开包含 API 的文件，或在 IDEA 项目面板中选择文件/文件夹
2. 使用快捷键 `Alt + Shift + E`（Windows/Linux）或 `Ctrl + E`（macOS）
3. 选择要导出的 API，选择 `cURL` 作为导出渠道
4. 点击 ✔ 按钮或按回车键完成导出

## 输出

导出会生成一个包含每个 API 端点 cURL 命令的 `.sh` 文件：

```bash
curl -X GET "http://localhost:8080/api/users" \
  -H "Content-Type: application/json"

curl -X POST "http://localhost:8080/api/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "test"}'
```

## 变量渲染

cURL 导出可以在生成命令前渲染环境变量占位符，支持两种占位符形式：

```text
{{baseUrl}}/api/users/${userId}
```

可以在 cURL 设置中配置渲染模式：

| 模式 | 行为 |
|------|------|
| **保留占位符** | 在命令中保留未解析的双花括号或美元花括号占位符。 |
| **使用当前环境解析** | 从当前 EasyYapi 环境读取变量值。 |
| **每次导出询问** | 导出前选择环境，也可以选择 **Skip** 保留占位符。 |

优先从环境读取变量，然后回退到配置读取器中的值。如果两个来源都没有变量，EasyYapi 会保留占位符并记录警告。JSON 请求体会先序列化再替换，因此请求体中的占位符也可以解析。

## 格式化选项

cURL 导出对话框可以针对本次导出覆盖已保存的 cURL 默认值：

- 包含注释和分节分隔线
- 美化 JSON 请求体
- 使用每个参数一行的多行命令
- 使用 `--request`、`--header`、`--data` 等长参数名代替短参数
- 有可用响应时，将响应体示例追加为注释

Dashboard 中的 **Copy as cURL** 会使用已保存的格式化选项，也可以配置它使用 Dashboard 中编辑后的接口，还是使用源代码中的原始接口。

## 请求前脚本

可以在 cURL 导出选项或 cURL 设置中启用 **Run pre-request scripts**。启用后，批量导出每条命令前会执行文件夹级和类级脚本；单个接口的 **Copy as cURL** 流程还会包含接口级脚本。

脚本可以向生成的命令中注入请求头、认证信息或请求体修改。该功能默认关闭；保持关闭可以避免普通导出调用脚本机制。
