# mdoc.method.http.method

- 设置方法文档(rpc)HTTP请求方式, 默认`POST`


## 修改默认行为

***将无参方法设置为`GET`***

- 配置如下:

```properties
mdoc.method.http.method=groovy:it.argCnt()==0?"GET":null
```