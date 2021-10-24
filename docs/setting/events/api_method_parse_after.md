# api.method.parse.after

- 解析api方法后回调

## demo

***增加log***

```properties
api.method.parse.after=groovy:logger.info("api:"+it.name()+"解析完成")
```
