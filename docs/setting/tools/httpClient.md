# `httpClient`是提供的http相关帮助类(v1.9.0+)

---

## 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| cookieStore() | cookieStore | 获取cookie管理器 | httpClient.cookieStore()|
| request() | request | 创建request | httpClient.request()|
| delete() | request | 创建`request`,并设置`method`为`DELETE` | httpClient.delete()| 
| delete(str) | request | 创建`request`,并设置`method`为`DELETE`、设置`url` | httpClient.delete("http://www.easyyapi.com")|
| get() | request | 创建`request`,并设置`method`为`GET` | httpClient.get()| 
| get(str) | request | 创建`request`,并设置`method`为`GET`、设置`url` | httpClient.get("http://www.easyyapi.com")|
| options() | request | 创建`request`,并设置`method`为`OPTIONS` | httpClient.options()| 
| options(str) | request | 创建`request`,并设置`method`为`OPTIONS`、设置`url` | httpClient.options("http://www.easyyapi.com")|
| post() | request | 创建`request`,并设置`method`为`POST` | httpClient.post()| 
| post(str) | request | 创建`request`,并设置`method`为`POST`、设置`url` | httpClient.post("http://www.easyyapi.com")|
| put() | request | 创建`request`,并设置`method`为`PUT` | httpClient.put()| 
| put(str) | request | 创建`request`,并设置`method`为`PUT`、设置`url` | httpClient.put("http://www.easyyapi.com")|
| trace() | request | 创建`request`,并设置`method`为`TRACE` | httpClient.trace()| 
| trace(str) | request | 创建`request`,并设置`method`为`TRACE`、设置`url` | httpClient.trace("http://www.easyyapi.com")|

---

# `request`,一般由`httpClient`创建

## 主要方法有:

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| call() | response | 发起`http`请求 | request.call()|
| method() | string | 获取当前请求的`method` | request.method()|
| method(string) | request | 设置当前请求的`method` | request.method("POST")|
| url() | string | 获取当前请求的`url` | request.url()|
| url(string) | request | 设置当前请求的`url` | request.url("http://www.easyyapi.com")|
| body() | object | 获取当前请求体 | request.body()|
| body(object) | request | 设置当前请求体 | request.body({"name":"admin"})|
| containsHeader(string) | bool | 判断当前请求是否有指定`header` | request.containsHeader("token")|
| containsParam(string) | bool | 判断当前请求是否有指定请求参数 | request.containsParam("name")|
| contentType() | string | 获取当前请求的`Content-type` | request.contentType()|
| contentType(string) | string | 设置当前请求的`Content-type` | request.contentType("application/json")|
| fileParam(string, string) | request | 设置一个文件参数 | request.contentType("file","/xxx/xxx/xxxx.xxx")|
| firstHeader(string) | string | 获取一个header参数 | request.firstHeader("Content-type")|
| firstParam(string) | param | 获取一个请求参数(注意返回值是param,包含参数名/参数值/参数类型[text/file]) | request.firstParam("name")|
| firstParamValue(string) | param | 获取一个请求参数值 | request.firstParamValue("name")|
| header(string, string) | request | 设置`header` | request.header("Content-type","application/json")|
| headers() | array\<header> | 获取所有的`header` | request.headers()|
| headers(string) | array\<string> | 获取指定`header`所有值 | request.headers("Content-type")|
| lastHeader(string) | string | 获取一个header参数 | request.lastHeader("Content-type")|
| lastParam(string) | param | 获取一个请求参数(注意返回值是param,包含参数名/参数值/参数类型[text/file]) | request.lastParam("name")|
| lastParamValue(string) | param | 获取一个请求参数值 | request.lastParamValue("name")|
| param(string, string) | request | 设置`param` | request.param("name","Tom")|
| query(string, string) | request | 设置query(请求时将被追加在url后) | request.query("name","Tom")|
| querys() | request | 获取所有的query参数 | request.querys()|
| paramValues(string) | array\<string> | 获取指定参数所有值 | request.paramValues("name")|
| params() | array\<param> | 获取所有参数 | request.params()|
| params(string) | array\<param> | 获取指定参数名的所有参数 | request.params("name")|
| setHeader(string, string) | request | 移除当前`header`名称的所有值,并设置`header` | request.setHeader("Content-type","application/json")|
| removeHeader(string, string) | request | 移除指定`header`名称的指定值 | request.removeHeader("Content-type","application/json")|
| removeHeaders(string) | request | 移除当前`header`名称的所有值 | request.removeHeaders("Content-type")|


# `cookieStore`,可以从`httpClient.cookieStore()`获得

## 主要方法有:

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| addCookie(cookie) | void | 添加一个cookie | httpClient.cookieStore().addCookie(cookie) |
| addCookies(cookies) | void | 添加多个cookie | httpClient.cookieStore().addCookies(cookies) |
| clear() | void | 清除cookie | httpClient.cookieStore().clear() |
| cookies() | array\<cookie> | 获得当前的cookies | httpClient.cookieStore().cookies() |
| newCookie() | cookie | 创建一个`cookie`,注意:并不会自动添加到`cookieStore`中，需要手动调用`addCookie`加入 | httpClient.cookieStore().newCookie() |