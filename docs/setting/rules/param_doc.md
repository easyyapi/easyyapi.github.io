# param.doc(doc.param)

- 参数的额外注释

## 在注释中给出参数类型

```properties
param.doc=js:"类型:"+it.type().name()
```

## 在注释中给出参数类型并去掉java包名

```properties
param.doc=groovy:"类型:"+tool.uncapitalize(it.type().name().replace("java.lang.",""))
```

### 示例API

```java
    /**
     * 更新用户名
     *
     * @param id      用户id
     * @param newName 新的用户名
     * @param slogon  个人签名
     * @deprecated 改用{@link #update(UserInfo)}
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(long id,
                      @RequestParam String newName,
                      @RequestParam(required = false, defaultValue = "haha") String slogon,
                      @RequestParam(required = false, defaultValue = "10") long times) {
            ...
    }
```

### 导出结果如下:

***请求参数:***

| 参数名称 | 是否必须 |	示例 | 备注 |
| --- | --- | --- | --- |
| id | 是 |   | 用户id<br>类型:long |
| newName | 是|   |新的用户名<br> 类型:string |
| slogon | 否 |   |个人签名<br> 类型:string |
| times | 否 |   | 类型:long |