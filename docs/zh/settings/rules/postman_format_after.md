# postman.format.after

Postman 集合格式化完成后触发的事件。

## 用法

```properties
postman.format.after=groovy:'''
// 在导出前修改格式化后的 Postman 集合
logger.info("Postman 集合格式化完成")
'''
```

此事件允许在 Postman 集合格式化后、导出前进行修改。如果此事件中发生错误，将会抛出异常（不同于其他忽略错误的事件）。

## 另见

- [postman.prerequest](./postman_prerequest) — 预请求脚本
- [postman.test](./postman_test) — 测试脚本
