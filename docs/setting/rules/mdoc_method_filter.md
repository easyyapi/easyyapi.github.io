# mdoc.method.filter

> 用于选择哪些方法可以导出方法文档(rpc)

该规则用于筛选哪些方法应该被导出为RPC方法文档。在导出RPC接口时使用此规则来控制哪些方法应该被包含在文档中。

## 配置示例

```properties
# 使用正则表达式筛选方法
mdoc.method.filter=groovy:it.name().matches("^(get|query|find).*")

# 根据方法返回类型筛选
mdoc.method.filter=groovy:it.returnType().isExtend("com.xxx.Result")

# 根据注解筛选方法
mdoc.method.filter=@com.xxx.annotation.Doc
```

## 配合class.filter使用

通常与`mdoc.class.filter`规则一起使用，首先筛选类，然后筛选方法：

```properties
# 先筛选类
mdoc.class.filter=groovy:it.name().endsWith("Client")
# 再筛选方法
mdoc.method.filter=groovy:!it.name().startsWith("internal")
```

## 示例用法

***UserService.java***

```java
/**
 * 用户服务接口
 */
public interface UserService {
    
    /**
     * 查询用户信息
     *
     * @param userId 用户ID
     * @return 用户信息
     */
    UserInfo queryUserInfo(Long userId);
    
    /**
     * 内部使用方法，不应导出
     */
    void internalUpdateCache();
}
```

使用以下配置将只导出查询方法，不导出内部方法：

```properties
mdoc.method.filter=groovy:it.name().startsWith("query")
``` 