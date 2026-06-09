# param.http.type

设置 HTTP 参数类型（query、path、header、body、cookie）。

## 用法

```properties
param.http.type=groovy:it.ann("org.springframework.web.bind.annotation.RequestBody") != null ? "body" : "query"
```
