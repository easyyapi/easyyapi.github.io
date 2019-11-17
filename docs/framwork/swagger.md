# 添加对swagger的支持

- 默认推荐配置中不包含`swagger`的支持,如果需要支持`swagger`,可自行[增加如下配置](/setting/local-file-config.html)

```properties
#swagger
doc.param=@io.swagger.annotations.ApiParam#value
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
param.required=@io.swagger.annotations.ApiParam#required
param.ignore=@io.swagger.annotations.ApiParam#hidden
doc.class=@io.swagger.annotations.Api#value
doc.method=@io.swagger.annotations.ApiOperation#value
doc.field=@io.swagger.annotations.ApiModelProperty#value
api.tag=@io.swagger.annotations.ApiOperation#tags
```