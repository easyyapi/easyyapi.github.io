# json.field.parse.after

- 解析属性(字段)后回调

## demo

***增加log***

```properties
json.field.parse.after=groovy:logger.info("属性:"+it.name()+"解析完成")
```