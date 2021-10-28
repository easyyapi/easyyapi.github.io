# api.class.parse.after

- 解析controller类后回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [class](../tools/it.html)  | 无  |

## demo

***增加log***

```properties
api.class.parse.after=groovy:logger.info("controller:"+it.name()+"解析完成")
```