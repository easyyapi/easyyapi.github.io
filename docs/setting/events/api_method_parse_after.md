# api.method.parse.after

- 解析api方法后回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [method](../tools/it.html)  | 无  |

## demo

***增加log***

```properties
api.method.parse.after=groovy:logger.info("api:"+it.name()+"解析完成")
```
