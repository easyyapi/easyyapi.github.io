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

| 变量 | 说明 |
|------|------|
| `request` | 即将发送的 HTTP 请求。可用方法见 [request](../tools/httpClient/request) |

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
- [request](../tools/httpClient/request) - 请求对象详情
- [response](../tools/httpClient/response) - 响应对象详情

## 可用版本

v1.9.0+
