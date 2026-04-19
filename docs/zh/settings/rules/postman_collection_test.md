# postman.collection.test

设置 Postman 导出时集合级别的测试脚本。

## 用法

```properties
postman.collection.test=groovy:'''
console.log("Collection test script")
'''
```

此事件在导出时对整个 Postman 集合执行一次，允许设置集合范围的测试逻辑。

## 另见

- [postman.test](./postman_test) — 方法级测试脚本
- [postman.class.test](./postman_class_test) — 类级测试脚本
