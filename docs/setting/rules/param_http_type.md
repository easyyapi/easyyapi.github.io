# param.http.type

- 用于设置API参数在HTTP请求中的类型(位置:body/form/query)
- `@RequestBody`/`@ModelAttribute`/`@RequestHeader`/`@PathVariable`等忽略此规则
- 参数注解有`@RequestParam`且`HttpMehotd`为`GET`也忽略此规则
- 其他不满足规则的参数在规则缺省的情况下，优先采取`query`模式

## 配置示例

### 全设置为form, 优先使用表单进行提交:

```properties
param.http.type=form
```

### RequestParam作为query, 其他做为form:

```properties
param.http.type[@org.springframework.web.bind.annotation.RequestParam]=query
param.http.type=form
```