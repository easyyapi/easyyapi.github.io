# json.field.parse.after

- 解析属性(字段)后回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [field](../tools/it.html) | 无  |

## demo

***增加log***

```properties
json.field.parse.after=groovy:logger.info("属性:"+it.name()+"解析完成")
```