# param.name

> 用于设置参数的名称

## 将参数名转为小写

```properties
# 使用toLowerCase()方法将参数名转为小写
param.name=groovy:it.name().toLowerCase()
```

## 参数名设置为SNAKE风格

```properties
# 将驼峰命名(camelCase)转换为蛇形命名(snake_case)
param.name=groovy:tool.camel2Underline(it.name())

# 或者使用正则表达式实现转换
param.name=js:it.name().replace(/([A-Z])/g, "_$1").toLowerCase()
```

## 示例API

***UserController.java***

```java
    /**
     * 更新用户信息
     *
     * @param userId      用户id
     * @param newName     新的用户名
     * @param phoneNumber 电话号码
     */
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Object updateUser(long userId,
                        @RequestParam String newName,
                        @RequestParam(required = false) String phoneNumber) {
            // 实现代码...
    }
```

### 导出结果如下:

***请求参数:***

| 参数名称         | 是否必须 | 示例 | 备注    |
|--------------|------|----|-------|
| user_id      | 是    |    | 用户id  |
| new_name     | 是    |    | 新的用户名 |
| phone_number | 否    |    | 电话号码  | 