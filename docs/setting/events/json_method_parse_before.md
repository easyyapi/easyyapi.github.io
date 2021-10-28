# json.method.parse.before

- 解析getter/setter方法前回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [method](../tools/it.html)  | 无  |

## demo

***增加log***

```properties
json.method.parse.before=groovy:logger.info("开始解析方法:"+it.name())
```