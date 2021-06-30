# mdoc.method.path

- 用于设置方法文档(rpc)的路径
- 为了防止重载方法覆盖,默认生成的path后加上了参数信息:`$className/$methodName/$args`
- 根据项目情况，可自行配置以简化路径长度


## 修改默认行为

***假设有如下类***

```java
package com.itangcent.dubbo.demo.client;

/**
 * 用户相关Client
 *
 * @module user_dubbo
 */
public interface UserClient {

    /**
     * 更新用户名
     *
     * @param id      用户id
     * @param newName 新的用户名
     * @param slogon  个人签名
     * @deprecated 改用{@link #update(UserInfo)}
     */
    public UserInfo set(long id, String newName,
                        String slogon,
                        long times);
}
```

***默认情况下***

- 导出的路径为:<br>
    `/com.itangcent.dubbo.demo.client.UserClient/set/long/java.lang.String/java.lang.String/long/`

***如果确认无重载方法，可以尝试去掉参数信息:***

- 配置如下:

```properties
mdoc.method.path=groovy:it.containingClass().name()+"/"+it.name()
```

- 导出的接口路径为: `/com.itangcent.dubbo.demo.client.UserClient/set`

***可以尝试去掉包名:***

- 配置如下:

```properties
mdoc.method.path=groovy:it.containingClass().getSimpleName()+"/"+it.name()
```

- 导出的接口路径为:`/UserClient/set`

***可以进一步将类名转换为小写:***

- 配置如下:

```properties
mdoc.method.path=groovy:it.containingClass().getSimpleName().toLowerCase()+"/"+it.name()
```

- 导出的接口路径为:`/userclient/update`
