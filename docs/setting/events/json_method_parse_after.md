# json.method.parse.after

- 解析getter/setter方法后回调

## demo

***增加log***

```properties
json.method.parse.after=groovy:logger.info("方法:"+it.name()+"解析完成")
```