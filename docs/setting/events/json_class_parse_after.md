# json.class.parse.after

- 解析类型后回调

## demo

***增加log***

```properties
api.class.parse.after=groovy:logger.info("类:"+it.name()+"解析完成")
```