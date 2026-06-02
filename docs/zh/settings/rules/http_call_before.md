# http.call.before

Call API 功能的请求前回调。

## 用法

````properties
http.call.before=groovy:```
// 记录请求信息
logger.info("Sending " + request.method() + " " + request.url())
if (request.body() != null) {
    logger.info("Body: " + request.body())
}
if (!request.formParams().isEmpty()) {
    logger.info("Form: " + request.formParams())
}
if (!request.query().isEmpty()) {
    logger.info("Query: " + request.query())
}
```
````

此回调在发送 HTTP 请求之前执行。可用于：
- 自动登录
- 添加通用请求头
- 设置请求参数
- 记录请求详情

## 上下文

脚本上下文中可用的变量：

| 变量 | 类型 | 说明 |
|------|------|------|
| `request` | `HttpRequestWrapper` | 即将发送的请求 |

### HttpRequestWrapper 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `request.url()` | `String` | 请求 URL |
| `request.method()` | `String` | HTTP 方法 |
| `request.headers()` | `List<KeyValue>` | 请求头 |
| `request.query()` | `List<KeyValue>` | 查询参数 |
| `request.body()` | `String?` | 请求体 |
| `request.formParams()` | `List<FormParam>` | 表单参数 |
| `request.cookies()` | `List<HttpCookie>` | Cookie |
| `request.contentType()` | `String?` | Content-Type |

## 示例

### 记录请求详情

````properties
http.call.before=groovy:```
logger.info("Sending " + request.method() + " " + request.url())
if (request.body() != null) {
    logger.info("Body: " + request.body())
}
if (!request.formParams().isEmpty()) {
    logger.info("Form: " + request.formParams())
}
if (!request.query().isEmpty()) {
    logger.info("Query: " + request.query())
}
```
````

### 基于 URL 的条件逻辑

````properties
http.call.before=groovy:```
if (request.url().contains("/api/")) {
    logger.info("API request detected")
}
```
````

## 相关链接

- [http.call.after](./http_call_after) - 请求后回调
- [httpClient.request](../tools/httpClient/request) - 请求包装对象详情
- [httpClient.response](../tools/httpClient/response) - 响应包装对象详情

## 可用版本

v1.9.0+
