# method.additional.response.header

> API响应需要额外的`header`

该规则允许为API响应添加额外的HTTP头信息，通常用于描述API可能返回的公共响应头。

## 简单使用

```properties
method.additional.response.header={name: "X-Rate-Limit", value: "100", desc: "当前API调用频率限制", required: false, demo: "100"}
```

## 更多配置选项

### 如果需要针对特定注解的API添加响应头

- 假定有如下注解:

```java
package com.itangcent.common.annotation;

/**
 * 分页API标记
 */
@Documented
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Paged {
}
```

- 则可以为所有分页API添加计数响应头

```properties
method.additional.response.header[@com.itangcent.common.annotation.Paged]={name: "X-Total-Count", value: "", desc: "总记录数", required: true, demo: "100"}
```

- 等价于

```properties
method.additional.response.header[groovy:it.hasAnn("com.itangcent.common.annotation.Paged")]={name: "X-Total-Count", value: "", desc: "总记录数", required: true, demo: "100"}
```

### 添加多个响应头

```properties
# 添加多个响应头（数组方式）
method.additional.response.header=[{name: "X-Rate-Limit", value: "100", desc: "当前API调用频率限制", required: false, demo: "100"}, {name: "X-Rate-Limit-Remaining", value: "99", desc: "剩余的API调用次数", required: false, demo: "99"}]

# 添加多个响应头（多条配置方式）
method.additional.response.header={name: "X-Rate-Limit", value: "100", desc: "当前API调用频率限制", required: false, demo: "100"}
method.additional.response.header={name: "X-Rate-Limit-Remaining", value: "99", desc: "剩余的API调用次数", required: false, demo: "99"}
```

### 使用动态脚本

```properties
method.additional.response.header=groovy:```
    def headers = []
    headers.add([name: "X-Rate-Limit", value: "100", desc: "当前API调用频率限制", required: false, demo: "100"])
    headers.add([name: "X-Rate-Limit-Remaining", value: "99", desc: "剩余的API调用次数", required: false, demo: "99"])
    return headers
```
```

### 示例API

```java
/**
 * 用户控制器
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    /**
     * 获取用户列表
     * 
     * @method.additional.response.header {name: "X-Total-Count", value: "", desc: "总记录数", required: true, demo: "100"}
     * @return 用户列表
     */
    @GetMapping("")
    public List<UserInfo> listUsers() {
        // 实现代码...
        return userList;
    }
}
```

上面的示例中，`listUsers` API的响应头中会包含 `X-Total-Count` 字段，用于表示用户总数，这对于分页功能特别有用。 

### 针对特定包下的API添加响应头

```properties
method.additional.response.header[groovy:it.containingClass().name().startsWith("com.test.api.admin")]={name: "X-Admin-Info", value: "", desc: "管理员信息", required: false, demo: "Admin"}
```

### 排除特定包下的API不添加响应头

```properties
method.additional.response.header[groovy:!it.containingClass().name().startsWith("com.test.api.public")]={name: "X-Auth-Token", value: "", desc: "认证信息", required: true, demo: "xxx"}
```

## 应用场景

1. **添加通用响应头**：为所有API添加通用的响应头信息
2. **特定API的响应头**：为特定API添加专有的响应头
3. **API文档完善**：在文档中展示API可能返回的所有响应头

## 示例API

***UserController.java***

```java
/**
 * 用户控制器
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    /**
     * 获取用户列表
     * 
     * @method.additional.response.header {name: "X-Total-Count", value: "", desc: "总记录数", required: true, demo: "100"}
     * @return 用户列表
     */
    @GetMapping("")
    public List<UserInfo> listUsers() {
        // 实现代码...
        return userList;
    }
}
```

上面的示例中，`listUsers` API的响应头中会包含 `X-Total-Count` 字段，用于表示用户总数，这对于分页功能特别有用。 