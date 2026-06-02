# request

HTTP 请求包装对象，在 `http.call.before` 和 `http.call.after` 规则脚本中可用。

`request` 对象提供对即将发送的 HTTP 请求属性的只读访问。

## 可用性

| 规则 | 可用变量名 |
|------|-----------|
| `http.call.before` | `request` |
| `http.call.after` | `request` |

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `request.url()` | `String` | 请求 URL |
| `request.method()` | `String` | HTTP 方法（GET、POST 等） |
| `request.headers()` | `List<KeyValue>` | 请求头 |
| `request.query()` | `List<KeyValue>` | 查询参数 |
| `request.body()` | `String?` | 请求体（可空） |
| `request.formParams()` | `List<FormParam>` | 表单参数 |
| `request.cookies()` | `List<HttpCookie>` | Cookie |
| `request.contentType()` | `String?` | Content-Type 头的值（可空） |

## 示例

### 查看请求详情

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

### 检查请求方法

````properties
http.call.before=groovy:```
if (request.method() == "POST") {
    logger.info("POST body: " + request.body())
}
```
````

### 读取请求头

````properties
http.call.before=groovy:```
def headers = request.headers()
headers.each { h ->
    logger.info(h.key() + ": " + h.value())
}
```
````

## 相关链接

- [response](./response) - HTTP 响应包装对象
- [httpClient](./) - HTTP 客户端
- [http.call.before](../../rules/http_call_before) - 请求前回调规则
- [http.call.after](../../rules/http_call_after) - 请求后回调规则
