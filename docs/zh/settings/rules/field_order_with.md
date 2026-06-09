# field.order.with

设置字段排序策略。

## 用法

```properties
field.order.with=groovy:it.type().fields().sort{ a,b -> a.order() <=> b.order() }
```
