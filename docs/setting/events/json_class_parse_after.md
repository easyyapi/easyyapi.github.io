# json.class.parse.after

- 解析类型后回调

| 规则目标(上下文it) | 附加上下文 |
| ------------ | ------------ |
| [class](../tools/it.html) | 无  |

## demo

***增加log***

```properties
json.class.parse.after=groovy:logger.info("类:"+it.name()+"解析完成")
```