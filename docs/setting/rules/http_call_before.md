# http.call.before

- http请求前回调,注意，插件所有的`http`请求都将触发此回调

## demo

***记录插件所有的请求***

```properties
http.call.before=groovy:logger.info("call:"+request.url())
```

***自动加入toekn***

``````properties
http.call.before=groovy:```
request.header("token","xxxxxxxxxxxxx")
```
``````
