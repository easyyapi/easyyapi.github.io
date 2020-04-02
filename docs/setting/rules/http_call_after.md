# http.call.after

- http请求后回调
- 注意:插件所有的`http`请求都将触发此回调

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

***`Call`自动登陆(Cookie)***

``````properties
http.call.after=groovy:```
//判断是不是需要登录的接口
if(response.code()==401){
    httpClient.post("http://xxx/login")
        .contentType("application/json")
        .body({"username":"xxx","passwd":"xxx"})
        .call()
    response.discard()//丢弃这一次的请求结果
}
```
``````

***`Call`自动登陆(Token)***


``````properties
http.call.after=groovy:```
//判断是不是需要登录的接口
if(response.code()==401){
    def loginResponse = httpClient.post("http://xxx/login")
        .contentType("application/json")
        .body({"username":"xxx","passwd":"xxx"})
        .call()
    def token = loginResponse.firstHeader("token")
    localStorage.set("token",token)
    response.discard()//丢弃这一次的请求结果
}
```
http.call.before=groovy:```
//从localStorage取token
request.header("token",localStorage.get("token"))
```
``````

---

***`host`不固定***

``````properties
//可以尝试通过正则获取当前请求的host
def host = regex.getGroup1("(https?://.+?)/.*?",request.url());
``````

***`x-www-form-urlencoded`提交***

``````properties
httpClient.post("http://xxx/login")
    .contentType("application/x-www-form-urlencoded")
    .param("username","name")
    .param("password","pwd")
    .call();
``````