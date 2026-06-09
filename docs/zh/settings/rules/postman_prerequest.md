# postman.prerequest

设置 Postman 预请求脚本。

## 用法

````properties
class.postman.prerequest=groovy:```
// 添加授权头
it.header("Authorization", "Bearer " + localStorage.get("token"))
```
````
