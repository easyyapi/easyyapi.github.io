# postman.prerequest

- 设置`postman`API的[`prerequest`](https://learning.postman.com/docs/postman/scripts/pre-request-scripts)

- 允许设置多条规则

## 固定`prerequest`配置示例如下

``````
postman.prerequest=```
pm.environment.get("variable_key");
pm.globals.get("variable_key");
pm.variables.get("variable_key");
pm.environment.set("variable_key", "variable_value");
pm.globals.set("variable_key", "variable_value");
pm.environment.unset("variable_key");
pm.globals.unset("variable_key");
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
```
``````

## 为有指定注解的`api`加上`prerequest`

``````
postman.prerequest[@com.itangcent.common.annotation.RequiredLogin]=```
pm.environment.get("variable_key");
pm.globals.get("variable_key");
pm.variables.get("variable_key");
pm.environment.set("variable_key", "variable_value");
pm.globals.set("variable_key", "variable_value");
pm.environment.unset("variable_key");
pm.globals.unset("variable_key");
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
```
``````

## 为没有指定注解的`api`加上`prerequest`

``````
postman.prerequest[!@com.itangcent.common.annotation.Public]=```
pm.environment.get("variable_key");
pm.globals.get("variable_key");
pm.variables.get("variable_key");
pm.environment.set("variable_key", "variable_value");
pm.globals.set("variable_key", "variable_value");
pm.environment.unset("variable_key");
pm.globals.unset("variable_key");
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
```
``````

## 在配置中提供多个`prerequest`,由代码注释来选择使用哪个

``````
postman.prerequest.groupA=```
pm.environment.get("variable_key");
```
postman.prerequest.groupB=```
pm.globals.get("variable_key");
```
postman.prerequest.groupC=```
pm.environment.set("variable_key", "variable_value");
```
postman.prerequest.groupD=```
pm.globals.set("variable_key", "variable_value");
```
postman.prerequest[#prerequest]=groovy:config.get("postman.prerequest."+it.doc("prerequest"))
``````

***使用如下:***

```java
/**
  * 获取用户列表
  *
  * @param type 用户类型 {@link com.itangcent.common.constant.UserType}
  * @prerequest groupA
  */
@RequestMapping(value = "/list", method = RequestMethod.GET)
public IResult list(Integer type) {
    ...
    return Result.success(Collections.singletonList(userInfo));
}
```

---

# class.postman.prerequest

- 设置`folder`上的[`prerequest`](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/#re-using-pre-request-scripts)

- 允许设置多条规则

- 上下文为`class`

---

# collection.postman.prerequest

- 设置`collection`上的[`prerequest`](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/#re-using-pre-request-scripts)

- 允许设置多条规则

- 注意`collection.postman.prerequest`无上下文,即`it`为`null`