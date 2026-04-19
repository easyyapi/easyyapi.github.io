# Markdown 模板配置

EasyYapi 支持自定义 Markdown 导出模板。

## 默认模板

默认使用内置的 Markdown 模板进行导出。

## 自定义模板

在配置文件中指定模板路径：

```properties
markdown.template=path/to/template.md
```

## 模板变量

| 变量 | 说明 |
|------|------|
| `${api.name}` | API 名称 |
| `${api.method}` | HTTP 方法 |
| `${api.path}` | API 路径 |
| `${api.description}` | API 描述 |
| `${api.params}` | 参数列表 |
| `${api.response}` | 响应信息 |
