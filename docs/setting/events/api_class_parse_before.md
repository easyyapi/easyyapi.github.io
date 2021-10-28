# api.class.parse.before

- 解析controller类前回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [class](../tools/it.html) | 无  |

## demo

***增加log***

```properties
api.class.parse.before=groovy:logger.info("开始解析controller:"+it.name())
```
