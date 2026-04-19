# Dubbo

EasyYapi 额外支持 Apache Dubbo RPC 框架的文档导出。

::: info
Dubbo 支持需要从 [easy-yapi/releases](https://github.com/tangcent/easy-yapi/releases) 下载包含 Dubbo 支持的插件包。
:::

## 使用方法

1. 确保 Dubbo 接口有完整的 Javadoc 注释
2. 使用快捷键或右键导出

## 示例

```java
/**
 * 用户服务
 */
public interface UserService {

    /**
     * 根据ID获取用户
     *
     * @param id 用户ID
     * @return 用户信息
     */
    User getUser(Long id);

    /**
     * 创建用户
     *
     * @param user 用户信息
     * @return 创建的用户
     */
    User createUser(User user);
}
```

## 配置

```properties
mdoc.class.filter=groovy:it.hasAnn("org.apache.dubbo.config.annotation.Service") || it.hasAnn("com.alibaba.dubbo.config.annotation.Service")
```
