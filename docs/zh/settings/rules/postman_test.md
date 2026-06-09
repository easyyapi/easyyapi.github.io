# postman.test

设置 Postman 测试脚本。

## 用法

````properties
class.postman.test=groovy:```
// 验证响应状态
pm.test("Status code is 200", function() {
    pm.response.to.have.status(200)
})
```
````
