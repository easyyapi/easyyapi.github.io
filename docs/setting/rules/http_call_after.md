# http.call.after

- http请求后回调,注意，插件所有的`http`请求都将触发此回调

## demo

***记录插件所有的请求的响应***

```properties
http.call.after=groovy:logger.info("response:"+response.string())
```

***某个接口请求成功后执行其他接口***

``````properties
http.call.after=groovy:```
//判断是不是指定接口
if(request.code()==200&&request.url().endsWith("/xxx")){
    httpClient.post("http://xxx/xxx")
    .contentType("application/json")
    .body({"xxx":"xxx","xxx":"xxx"})
    .call()
}
```
``````


***`Call`自动登陆***

``````properties
http.call.after=groovy:```
//判断是不是需要登录的接口
if(response.code()==401){
    httpClient.post("http://xxx/login")
    .body({"username":"xxx","passwd":"xxx"})
    .call()
    response.discard()//丢弃这一次的请求结果
}
```
``````
