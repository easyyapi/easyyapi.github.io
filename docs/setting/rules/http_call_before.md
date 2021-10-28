# http.call.before

- http请求前回调
- 注意:插件所有的`http`请求都将触发此回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| 无 | [request](../tools/httpClient.html) |

## demo

***记录插件所有的请求***

```properties
http.call.before=groovy:logger.info("call:"+request.url())
```

***自动加入指定toekn***

``````properties
http.call.before=groovy:```
request.header("token","xxxxxxxxxxxxx")
```
``````

***自动加入从localStorage获取的toekn***

``````properties
http.call.before=groovy:```
//从localStorage取token
request.header("token",localStorage.get("token"))
```
``````