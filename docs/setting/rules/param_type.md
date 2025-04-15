# param.type

> 指定参数的实际数据类型(用于接口参数类型与实际类型不一致的情况)

## 配置示例

```properties
param.type=#type
param.type[com.itangcent.common.model.UserInfo#id]=java.lang.Long
```

## demo

***用户接口***

```java
@RestController
@RequestMapping("/user")
public class UserCtrl {

    /**
     * 更新用户信息
     *
     * @param id 用户ID
     * @param username 用户名
     * @param email 邮箱地址 
     * @param mobile 手机号
     * @type java.lang.Long
     */
    @PutMapping("/")
    public Result updateUser(String id,
                           String username,
                           @Email String email,
                           @Pattern(regexp = "^1[3-9]\\d{9}$") String mobile) {
        // 实现代码...
        return Result.success();
    }
}
```

## 导出结果:

***请求参数:***

| 参数名称 | 是否必须 | 类型 | 示例 | 备注 |
| --- | --- | --- | --- | --- |
| id | 是 | long |  | 用户ID |
| username | 是 | string |  | 用户名 |
| email | 是 | string |  | 邮箱地址 |
| mobile | 是 | string |  | 手机号 | 