# api

API 工具。提供在解析和导出过程中修改 API 端点元数据的方法。

## 用法

```properties
method.additional.param=groovy:'''
api.setParam("version", "1.0", true, "API version")
'''
```

## 方法

### 基本信息

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `api.name()` | `String?` | 获取 API 名称 |
| `api.path()` | `String?` | 获取 API 路径 |
| `api.setPath(path)` | `void` | 设置 API 路径 |
| `api.method()` | `String?` | 获取 HTTP 方法（GET、POST 等） |
| `api.setMethod(method)` | `void` | 设置 HTTP 方法 |
| `api.description()` | `String?` | 获取 API 描述 |
| `api.setDescription(desc)` | `void` | 设置 API 描述 |
| `api.appendDesc(desc)` | `void` | 追加 API 描述 |

### 参数

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `api.setParam(name, defaultValue, required, desc)` | `void` | 添加/设置查询参数 |
| `api.setFormParam(name, defaultValue, required, desc)` | `void` | 添加/设置表单参数 |
| `api.setPathParam(name, defaultValue, desc)` | `void` | 添加/设置路径参数 |

### 请求头

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `api.setHeader(name, defaultValue, required, desc)` | `void` | 添加/设置请求头 |
| `api.setResponseHeader(name, defaultValue, required, desc)` | `void` | 添加/设置响应头 |

### 响应

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `api.setResponseCode(code)` | `void` | 设置响应状态码 |
| `api.appendResponseBodyDesc(desc)` | `void` | 追加响应体描述 |
| `api.setResponseBodyClass(className)` | `void` | 设置响应体类名 |

## 示例

### 添加通用参数

```properties
method.additional.param=groovy:'''
api.setParam("version", "1.0", true, "API version")
api.setParam("timestamp", "", false, "Request timestamp")
'''
```

### 添加请求头

```properties
method.additional.header=groovy:'''
api.setHeader("X-Request-ID", "", false, "Unique request identifier")
api.setHeader("Authorization", "", true, "Bearer token")
'''
```

### 修改 API 路径

```properties
method.path=groovy:'''
def originalPath = api.path()
if (originalPath && !originalPath.startsWith("/api")) {
    api.setPath("/api" + originalPath)
}
return api.path()
'''
```

### 添加响应信息

```properties
method.additional.response=groovy:'''
api.setResponseCode(200)
api.appendResponseBodyDesc("Returns the created resource")
api.setResponseHeader("X-Resource-ID", "", true, "ID of the created resource")
'''
```

### 条件参数添加

```properties
method.additional.param=groovy:'''
if (it.hasAnn("org.springframework.web.bind.annotation.GetMapping")) {
    api.setParam("page", "1", false, "Page number")
    api.setParam("size", "20", false, "Page size")
}
'''
```

### 追加描述

```properties
method.description=groovy:'''
def baseDesc = it.doc() ?: ""
api.setDescription(baseDesc)
api.appendDesc("\n\n**Note:** This API requires authentication.")
'''
```

### 完整 API 设置

```properties
method.after=groovy:'''
def name = it.name()

if (name.startsWith("create")) {
    api.setMethod("POST")
    api.setResponseCode(201)
    api.appendResponseBodyDesc("Created resource")
} else if (name.startsWith("update")) {
    api.setMethod("PUT")
    api.setResponseCode(200)
} else if (name.startsWith("delete")) {
    api.setMethod("DELETE")
    api.setResponseCode(204)
} else if (name.startsWith("get") || name.startsWith("list") || name.startsWith("find")) {
    api.setMethod("GET")
    api.setResponseCode(200)
}

api.setHeader("Content-Type", "application/json", true, "Content type")
api.setHeader("Accept", "application/json", true, "Accepted response type")
'''
```

## 注意事项

- `api` 工具仅在方法相关的规则上下文中可用
- 通过 `api` 方法所做的更改会影响导出的 API 文档
- 在 `method.additional.*` 规则中使用 `api` 来添加额外的元数据

## 相关链接

- [it](./it) - 当前上下文对象
- [config](./config) - 配置访问
