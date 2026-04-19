# 导出普通 Java Method 文档

EasyYapi 可以导出普通 Java 方法的文档（不仅仅是 HTTP API）。这对于文档化服务方法、工具方法和其他非 HTTP 端点非常有用。

## 使用方法

1. 打开包含要文档化的方法的文件
2. 使用快捷键 `Alt + Shift + E` (Windows/Linux) 或 `Ctrl + E` (macOS)
3. 选择要导出的方法
4. 选择导出渠道并完成导出

## 配置

使用以下规则自定义方法文档：

- [mdoc.class.filter](/zh/settings/rules/mdoc_class_filter) — 过滤要包含的类
- [mdoc.method.filter](/zh/settings/rules/mdoc_method_filter) — 过滤要包含的方法
- [mdoc.method.path](/zh/settings/rules/mdoc_method_path) — 设置方法文档的路径
- [mdoc.method.http.method](/zh/settings/rules/mdoc_method_http_method) — 设置方法文档的 HTTP 方法
