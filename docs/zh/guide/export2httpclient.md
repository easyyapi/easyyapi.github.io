# 导出为 HttpClient

将 API 定义导出为 IntelliJ IDEA HttpClient 请求。

## 使用方法

### 方法一：右键导出

1. 在项目中打开包含 API 的文件，或在 IDEA 项目面板中选择文件/文件夹
2. 右键点击文件内容或文件夹
3. 选择 `ExportHttpClient` 导出文件或文件夹中的所有 API

### 方法二：快捷键导出

1. 在项目中打开包含 API 的文件，或在 IDEA 项目面板中选择文件/文件夹
2. 使用快捷键 `Alt + Shift + E`（Windows/Linux）或 `Ctrl + E`（macOS）
3. 选择要导出的 API，选择 `HttpClient` 作为导出渠道
4. 点击 ✔ 按钮或按回车键完成导出

## 输出

导出会生成一个包含每个 API 端点 HttpClient 请求的 `.http` 文件：

```http
GET http://localhost:8080/api/users
Content-Type: application/json

###
POST http://localhost:8080/api/users
Content-Type: application/json

{
  "name": "test"
}
```

## 使用导出的文件

1. 将导出的 `.http` 文件保存到你的项目中
2. 在 IntelliJ IDEA 中打开该文件
3. 点击请求即可在 IDEA 中直接执行
4. 可配置 [HttpClient 测试框架](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html) 进行高级测试
