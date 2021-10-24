# api.param.parse.after

- 解析api参数后回调

## demo

***增加log***

```properties
api.param.parse.after=groovy:logger.info("api参数:"+it.name()+"解析完成")
```
