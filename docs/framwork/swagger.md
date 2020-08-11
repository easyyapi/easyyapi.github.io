## 默认推荐配置中不包含`swagger`的支持

### 如果需要支持[swagger](https://swagger.io),可自行按需[增加如下配置](/setting/index.html)

- 基础配置

``````properties

#swagger
param.doc=@io.swagger.annotations.ApiParam#value
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
param.required=@io.swagger.annotations.ApiParam#required
param.ignore=@io.swagger.annotations.ApiParam#hidden
class.doc=@io.swagger.annotations.Api#value
method.doc=@io.swagger.annotations.ApiOperation#value
field.doc=@io.swagger.annotations.ApiModelProperty#value
api.tag=@io.swagger.annotations.ApiOperation#tags

``````

- 增强配置, 可根据实际情况修改

``````properties

# 解析ApiImplicitParam的参数
resolve_api_implicit_param=```
    def desc = map.value
    def allowableValues = map.allowableValues
    if(tool.notNullOrBlank(allowableValues)){
        desc = desc + "\n允许的值:" + allowableValues
    }

    def paramType = map.paramType ?: "query"
    def required = map.required?:true
    if(paramType==""||paramType=="query"){
        api.setParam(map.name,map.defaultValue,required,desc)
    }else if(paramType=="form"){
        api.setFormParam(map.name,map.defaultValue,required,desc)
    }else if(paramType=="path"){
        api.setPathParam(map.name,map.defaultValue,desc)
    }else if(paramType=="header"){
        api.setHeader(map.name,map.defaultValue,required,desc)
    }
```

# 解析ApiImplicitParam
export.after[@io.swagger.annotations.ApiImplicitParam]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiImplicitParam")
    ${resolve_api_implicit_param}
```

# 解析ApiImplicitParams
export.after[@io.swagger.annotations.ApiImplicitParams]=groovy:```
    def maps = it.annMap("io.swagger.annotations.ApiImplicitParams")
    for(map in maps.value){
        ${resolve_api_implicit_param}
    }
```


# 解析ApiResponse的参数到api描述中
resolve_api_response=```
    def desc = "\\n\\n***响应码***:"+map.code+"\\n\\n"
    desc += map.message+"\\n\\n"
    def response = map.response
    if(response!=null){
        def responseClass = helper.findClass(response)
        if(responseClass!=null){
            desc += "响应内容:\\n```json\\n" + responseClass.toJson(true) + "\\n```\\n"
        }
    }
    api.appendDesc(desc)
```


# 解析ApiResponse到api描述中
export.after[@io.swagger.annotations.ApiResponse]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiResponse")
    ${resolve_api_response}
```

# 解析ApiResponses到api描述中
export.after[@io.swagger.annotations.ApiResponses]=groovy:```
    def maps = it.annMap("io.swagger.annotations.ApiResponses")
    for(map in maps.value){
        ${resolve_api_response}
    }
```


# 解析单个ApiResponse到已有的Response中
export.after[@io.swagger.annotations.ApiResponse]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiResponse")

    api.setResponseCode(map.code?:200)
    api.appendResponseBodyDesc(map.message)
    def responseHeaders = map.responseHeaders
    if(responseHeaders!=null){
        for(responseHeader in responseHeaders) {
            api.setResponseHeader(responseHeader.name,"",true,responseHeader.description)
        }
    }
    def response = map.response
    if(response!=null){
        api.setResponseBodyClass(response)
    }
```

``````