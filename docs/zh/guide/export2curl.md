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
