# json.field.parse.before

- 解析属性(字段)前回调

## demo

***增加log***

```properties
json.field.parse.before=groovy:logger.info("开始解析属性:"+it.name())
```