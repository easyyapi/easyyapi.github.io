# api.class.parse.before

- 解析controller类前回调

## demo

***增加log***

```properties
api.class.parse.before=groovy:logger.info("开始解析controller:"+it.name())
```
