# postman.collection.prerequest

设置 Postman 导出时集合级别的预请求脚本。

## 用法

```properties
postman.collection.prerequest=groovy:'''
console.log("Collection pre-request script")
'''
```

此事件在导出时对整个 Postman 集合执行一次，允许设置集合范围的预请求逻辑，如认证令牌。

## 另见

- [postman.prerequest](./postman_prerequest) — 方法级预请求脚本
- [postman.class.prerequest](./postman_class_prerequest) — 类级预请求脚本
