# export.after

- 每个api导出完成后回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [method](../tools/it.html) | [api](../tools/api.html)  |


## demo

***增加接口描述信息***

```properties
export.after=groovy:api.appendDesc("\n这个接口已废弃\n")
```

***header中token不需要显示传参***

```properties
export.after=groovy:api.removeHeader("token")
```

***修改url***

```properties
export.after=groovy:api.setPath("/pre"+api.path())
```

***response的header中会返回当前用户会员等级***

```properties
export.after=groovy:api.addResponseHeader("level","","true","当前用户会员等级")
```

***将method上的`@version xxx`加入到`url`中***

``````properties
export.after[#version]=groovy:```
    def tag = it.doc("version")
    def url = api.path()
    if(url.contains("?")){
        url = url +"&version=" + tag
    }else{
        url = url +"?version=" + tag
    }
    api.setPath(url)
```
``````

