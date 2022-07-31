# api.param.parse.before

- 解析api参数前回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [param](../tools/it.html) | 无  |

## demo

***增加log***

```properties
api.method.parse.before=groovy:logger.info("开始解析api参数:"+it.name())
```
