# api.method.parse.before

- 解析api方法前回调

## demo

***增加log***

```properties
api.method.parse.before=groovy:logger.info("开始解析api:"+it.name())
```
