# `api`即为当前导出的`api`

- 应用对象只提供方法即`api.method()✅`，不提供属性`api.property❎`

## 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| name() | string | api名称 | api.name() |
| setName("name") | void | 设置api名称 | api.setName("xxx") |
| desc() | string | api描述 | api.desc() |
| setDesc("desc") | void | 设置api描述 | api.setDesc("这是一个...") |
| appendDesc("desc") | void | 追加api描述 | api.appendDesc("这是一个...") |
| method() | string | api的Http Method | api.method() |
| setMethod("method") | void | 设置api的Http Method | api.setMethod("POST") |
| setMethodIfMissed("method") | void | 如果api的Http Method不存在则设置为指定值| api.setMethodIfMissed("POST") |
| path() | string | api路径, 如果此api有多个路径, 返回第一个 | api.path() |
| paths() | string[] | api路径数组 | api.paths() |
| setPath("path") | void | 设置api路径 | api.setPath("/a/b/c") |
| setPaths(["path"*]) | void | 设置api路径 | api.setPaths(["/a/b/c"."/a/b/d"]) |
| bodyAttr() | string | api body的描述 | api.bodyAttr() |
| setBody(object) | void | 设置api body | api.setBody(["x":"y"]) |
| setBodyClass("class") | void | 通过类型名设置api body | api.setBodyClass("com.itangcent.XxxxDTO") |
| setJsonBody(object,"attr") | void | 设置api body | api.setBody(["x":"y"],"描述") |
| addModelAsParam(object) | void | 设置api参数 | api.addModelAsParam(["x":"y"]) |
| addModelClass("class") | void | 通过类型名设置api参数 | api.addModelClass("com.itangcent.XxxxDTO") |
| addParam(paramName,defaultVal,desc) | void | 增加参数 | api.addParam("name","tang","user name") |
| addParam(paramName,defaultVal,required,desc) | void | 增加参数 | api.addParam("name","tang",false,"user name") |
| setParam(paramName,defaultVal,required,desc) | void | 设置参数(如果参数已存在会被覆盖) | api.setParam("name","tang",false,"user name") |
| addFormParam(paramName,defaultVal,desc) | void | 增加表单参数 | api.addFormParam("name","tang","user name") |
| addFormParam(paramName,defaultVal,required,desc) | void | 增加表单参数 | api.addFormParam("name","tang",false,"user name") |
| setFormParam(paramName,defaultVal,required,desc) | void | 设置表单参数(如果参数已存在会被覆盖) | api.setFormParam("name","tang",false,"user name") |
| addFormFileParam(paramName,required,desc) | void | 增加文件类型的表单参数 | api.setFormParam("avatar",false,"user's avatar") |
| setFormFileParam(paramName,required,desc) | void | 增加文件类型的表单参数(如果参数已存在会被覆盖)  | api.setFormFileParam("avatar",false,"user's avatar") |
| addPathParam(paramName,desc) | void | 增加路径参数 | api.addPathParam("id","user id") |
| addPathParam(paramName,value,desc) | void | 增加路径参数 | api.addPathParam("id","1","user id") |
| setPathParam(paramName,value,desc) | void | 设置路径参数(如果参数已存在会被覆盖) | api.setPathParam("id","1","user id") |
| headers() | array\<Header> | 获取api所有的Header | api.headers() |
| header("name") | Header | 获取api中指定名称的Header | api.header("Content-Type") |
| headers("name") | array\<Header> | 获取api中指定名称的所有Header | api.headers("token") |
| removeHeader("name") | Header | 移除api中指定名称的Header | api.removeHeader("token") |
| addHeader("name","value") | void | 增加Header | api.addHeader("Content-Type","application/json") |
| addHeaderIfMissed("name","value") | void | 如果指定名称的Header不存在则增加此Header | api.addHeaderIfMissed("Content-Type","application/json") |
| addHeader("name","value",required,"desc") | void | 增加Header | api.addHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource") |
| setHeader("name","value",required,"desc") | void | 设置Header(如果Header已存在会被覆盖)  | api.setHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource") |
| 以下为`response`相关的方法 | ----- | -----  |  ----- |
| setResponseBody(body) | void | 设置api响应的body</br>bodyType默认为raw | api.setResponseBody(["x":"y"]) |
| setResponseBody("bodyType",body)  | void | 设置api响应的body</br>bodyType:raw/json/xml | api.setResponseBody("json",["x":"y"]) |
| setResponseBodyClass("bodyClass") | void | 通过类型名设置api响应的body</br>bodyType默认为raw | api.setResponseBody("com.itangcent.XxxxVO") |
| setResponseBodyClass("bodyType","bodyClass") | void | 通过类型名设置api响应的body</br>bodyType:raw/json/xml | api.setResponseBody("json","com.itangcent.XxxxVO") |
| setResponseCode(code) | void | 设置响应code | api.setResponseCode(200) |
| appendResponseBodyDesc("bodyDesc") | void | 设置响应描述 | api.appendResponseBodyDesc("user info") |
| addResponseHeader("name","value") | void | 增加响应Header | api.addResponseHeader("Content-Type","application/json") |
| addResponseHeader("name","value",required,"desc") | void | 增加响应Header | api.addResponseHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource") |
| setResponseHeader("name","value",required,"desc") | void | 设置响应Header | api.setResponseHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource") |