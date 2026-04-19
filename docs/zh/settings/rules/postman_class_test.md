# postman.class.test

设置 Postman 导出时类级别的测试脚本。

## 用法

```properties
postman.class.test=groovy:'''
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
'''
```

导出到 Postman 时，此脚本将应用于该类中的所有 API 方法。

## 另见

- [postman.test](./postman_test) — 方法级测试脚本
- [postman.collection.test](./postman_collection_test) — 集合级测试事件
