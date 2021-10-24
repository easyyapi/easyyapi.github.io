# api.param.parse.before

- 解析api参数前回调

## demo

***增加log***

```properties
api.method.parse.before=groovy:logger.info("开始解析api参数:"+it.name())
```
