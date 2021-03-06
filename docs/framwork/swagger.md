## 默认推荐配置中不包含`swagger`的支持

### 如果需要支持[swagger](https://swagger.io),可自行按需[增加如下配置](/setting/index.html)

- [基础配置](https://github.com/tangcent/easy-yapi/blob/master/third/swagger.config)

``````properties

# swagger

# ApiParam
param.doc=@io.swagger.annotations.ApiParam#value
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
param.required=@io.swagger.annotations.ApiParam#required
param.ignore=@io.swagger.annotations.ApiParam#hidden

# Api
class.doc=@io.swagger.annotations.Api#value

# ApiModel
class.doc=io.swagger.annotations.ApiModel#value
class.doc=io.swagger.annotations.ApiModel#description

# ApiModelProperty
json.rule.field.name=@io.swagger.annotations.ApiModelProperty#name
field.ignore=@io.swagger.annotations.ApiModelProperty#hidden
field.doc=@io.swagger.annotations.ApiModelProperty#value
field.doc=@io.swagger.annotations.ApiModelProperty#notes
field.required=@io.swagger.annotations.ApiModelProperty#required

# ApiOperation
method.doc=@io.swagger.annotations.ApiOperation#value
api.tag=@io.swagger.annotations.ApiOperation#tags
``````

***快速配置***

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger.config
```

- [增强配置](https://github.com/tangcent/easy-yapi/blob/master/third/swagger.advanced.config), 可根据实际情况修改

``````properties

# swagger-advanced

# resolve the parameters from ApiImplicitParam
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

# extract map from ApiImplicitParam
export.after[@io.swagger.annotations.ApiImplicitParam]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiImplicitParam")
    ${resolve_api_implicit_param}
```

# extract maps from ApiImplicitParams
export.after[@io.swagger.annotations.ApiImplicitParams]=groovy:```
    def maps = it.annMap("io.swagger.annotations.ApiImplicitParams")
    for(map in maps.value){
        ${resolve_api_implicit_param}
    }
```


# Resolve the response from `APIResponse` into the API description
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


# Resolve `APIResponse` into the API description
export.after[@io.swagger.annotations.ApiResponse]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiResponse")
    ${resolve_api_response}
```

# Resolve `APIResponses` into the API description
export.after[@io.swagger.annotations.ApiResponses]=groovy:```
    def maps = it.annMap("io.swagger.annotations.ApiResponses")
    for(map in maps.value){
        ${resolve_api_response}
    }
```


# Resolve one `APIResponse` into the API description
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

***快速配置***

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger.advanced.config
```