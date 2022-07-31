# json.method.parse.after

- 解析getter/setter方法后回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [method](../tools/it.html)  | 无  |

## demo

***增加log***

```properties
json.method.parse.after=groovy:logger.info("方法:"+it.name()+"解析完成")
```