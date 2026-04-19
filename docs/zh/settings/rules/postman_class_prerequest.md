# postman.class.prerequest

设置 Postman 导出时类级别的预请求脚本。

## 用法

```properties
postman.class.prerequest=groovy:'''
console.log("Pre-request for class: " + it.name())
'''
```

导出到 Postman 时，此脚本将应用于该类中的所有 API 方法。

## 另见

- [postman.prerequest](./postman_prerequest) — 方法级预请求脚本
- [postman.collection.prerequest](./postman_collection_prerequest) — 集合级预请求事件
