# postman.test

- 设置`postman`API的[`test`](https://learning.postman.com/docs/postman/scripts/test-scripts/)

- 允许设置多条规则

## 固定`test`配置示例如下

``````
postman.test=```
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
var jsonObject = xml2Json(responseBody);
var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
```
``````

## 为有指定注解的`api`加上`test`

``````
postman.test[@com.itangcent.common.annotation.RequiredLogin]=```
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
var jsonObject = xml2Json(responseBody);
var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
```
``````

## 为没有指定注解的`api`加上`test`

``````
postman.test[!@com.itangcent.common.annotation.Public]=```
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
var jsonObject = xml2Json(responseBody);
var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
```
``````

## 在配置中提供多个`test`,由代码注释来选择使用哪个

``````
postman.test.groupA=```pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
```
postman.test.groupB=```
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
```
postman.test.groupC=```
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```
postman.test.groupD=```
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
```
postman.test[#test]=groovy:config.get("postman.test."+it.doc("test"))
``````

***使用如下:***

```java
/**
  * 获取用户列表
  *
  * @param type 用户类型 {@link com.itangcent.common.constant.UserType}
  * @test groupA
  */
@RequestMapping(value = "/list", method = RequestMethod.GET)
public IResult list(Integer type) {
    ...
    return Result.success(Collections.singletonList(userInfo));
}
```


---

# class.postman.test

- 设置`folder`上的[`test`](https://learning.postman.com/docs/writing-scripts/test-scripts/#testing-collections-and-folders)

- 允许设置多条规则

- 上下文为`class`

---

# collection.postman.test

- 设置`collection`上的[`test`](https://learning.postman.com/docs/writing-scripts/test-scripts/#testing-collections-and-folders)

- 允许设置多条规则

- 注意`collection.postman.test`无上下文,即`it`为`null`