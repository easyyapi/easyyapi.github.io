# json.field.parse.before

- 解析属性(字段)前回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [field](../tools/it.html) | 无  |

## demo

***增加log***

```properties
json.field.parse.before=groovy:logger.info("开始解析属性:"+it.name())
```