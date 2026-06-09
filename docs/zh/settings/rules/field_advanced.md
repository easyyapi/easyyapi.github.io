# field.advanced

字段高级配置。

## 用法

````properties
field.advanced=groovy:```
if (it.type().name() == "java.util.Date") {
    it.setJsonType("string")
    it.setFormat("date-time")
}
```
````
