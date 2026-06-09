# json.additional.field

向 JSON 输出中添加额外字段。

## 用法

````properties
json.additional.field=groovy:```
if (it.type().name() == "com.example.Result") {
    it.addAdditionalField("timestamp", "long", System.currentTimeMillis())
}
```
````
