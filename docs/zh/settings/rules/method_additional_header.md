# method.additional.header

为方法添加额外的请求头。

## 用法

````properties
method.additional.header=groovy:```
header("Authorization", "Bearer ${token}")
header("X-Request-Id", UUID.randomUUID().toString())
```
````
