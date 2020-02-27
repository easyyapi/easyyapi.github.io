# method.return

- 设置方法的返回值
- 常用于以下情况:
    - 方法返回Object
    - 方法返回类型中的泛型类型未明确`<Object>`/`<?>`/`<*>`
    - 方法返回类型与实际响应无关，例如通过操作HttpServletResponse来返回响应

## 如以下API

***API:***

```java
    /**
     * 通过`HttpServletResponse`写入响应
     */
    @RequestMapping(value = "/writeByResponse", method = RequestMethod.GET)
    public void writeByResponse(HttpServletResponse response) throws IOException {
        UserInfo userInfo = new UserInfo();
        userInfo.setId(1l);
        userInfo.setName("Tom");
        userInfo.setAge(25);
        response.getOutputStream().write(new Gson().toJson(Result.success(userInfo)).getBytes(Charsets.UTF_8));
    }
```

- 这个方法返回的是`void`,但实际响应的是`Result<UserInfo>`, 所以需要通过额外的途径来表明此`API`的实际响应.


---

***简单的,可做如下配置:***

```properties
method.return=#real_return
```

***使用方法:***

```java
/**
 * @real_return com.itangcent.common.dto.Result<com.itangcent.common.model.UserInfo>
 */
```

---


为了方便书写，我们可以尝试使用`{@link}`来设置实际响应类型，利用`helper.resolveLink`来解析

***例如做如下配置:***

```properties
method.return[#real_return]=groovy: helper.resolveLink(it.doc("real_return"))
```

***使用方法:***

```java
/**
 * @real_return {@link Result<UserInfo>}
 */
```


---


更进一步的，如果所有的响应都由`com.itangcent.common.dto.Result`包装

***做如下配置:***

```properties
method.return[#real_return]=groovy: "com.itangcent.common.dto.Result<" +  helper.resolveLink(it.doc("real_return")) +">"
```

***使用方法:***

```java
/**
 * @real_return {@link UserInfo}
 */
```