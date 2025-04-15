# properties.prefix

> 用于设置导出DTO类到Properties时的属性前缀

该规则用于在使用IDEA中EasyApi插件的"To Properties"功能导出DTO类时，为生成的属性设置前缀。这有助于在多模块项目中区分不同模块的属性配置。

## 配置示例

```properties
# 设置属性前缀
properties.prefix=myapp.api

# 使用条件判断
properties.prefix=groovy:it?.containingClass()?.name()?.startsWith("com.myapp.admin") ? "admin" : "client"
```

## 实际应用

当使用"To Properties"功能导出DTO类时，配置的前缀会自动添加到生成的属性前面：

例如，对于以下DTO类：
```java
public class ApiResponse {
    private int code;      // 响应状态码，0表示成功
    private String msg;    // 响应消息
    private Object data;   // 响应数据
}
```

默认导出的Properties结果为：
```properties
#响应状态码
#0 表示成功，其他值表示失败
code=0
#响应消息
#成功时为"success"，失败时为错误信息
msg=
#响应数据
#成功时包含实际返回的数据
data=
```

如果配置了`properties.prefix=api`，则导出结果为：
```properties
#响应状态码
#0 表示成功，其他值表示失败
api.code=0
#响应消息
#成功时为"success"，失败时为错误信息
api.msg=
#响应数据
#成功时包含实际返回的数据
api.data=
```

## 多模块项目配置

在具有多个模块的项目中，可以为不同模块设置不同的属性前缀：

```properties
# 根据类名设置不同的前缀
properties.prefix=groovy:```
    def className = it?.containingClass()?.name()
    if (className == null) return ""
    if (className.startsWith("com.myapp.admin")) return "admin"
    if (className.startsWith("com.myapp.client")) return "client"
    return "common"
```
```

这样，当导出不同模块中的DTO类时，会自动应用相应的前缀。

## 结合其他配置规则

`properties.prefix`规则可以与其他导出相关的配置规则一起使用，以实现更灵活的属性导出控制。 