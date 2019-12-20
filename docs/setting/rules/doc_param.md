# doc.param

- 参数的额外注释

## 在注释中给出参数类型

```properties
doc.param=js:"类型:"+it.type().name()
```

## 在注释中给出参数类型并去掉java包名

```properties
java.to.js.type=(function(type){type = type.replace("java.lang.","");return type.replace(type[0],type[0].toLowerCase());})
doc.param=js:"\n类型:"+${java.to.js.type}(it.type().name())
```


### 导出结果如下:

***请求参数:***

| 参数名称 | 是否必须 |	示例 | 备注 |
| --- | --- | --- | --- |
| id | 是 |   | 用户id<br>类型:long |
| newName | 是|   |新的用户名<br> 类型:string |
| slogon | 否 |   |个人签名<br> 类型:string |
| times | 否 |   | 类型:long |