# api.class.parse.after

- 解析controller类后回调

## demo

***增加log***

```properties
api.class.parse.after=groovy:logger.info("controller:"+it.name()+"解析完成")
```