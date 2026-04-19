# Dubbo

EasyYapi additionally supports Apache Dubbo RPC framework documentation export.

::: info
Dubbo support requires downloading the plugin package with Dubbo support from [easy-yapi/releases](https://github.com/tangcent/easy-yapi/releases).
:::

## Usage

1. Ensure Dubbo interfaces have complete Javadoc comments
2. Use shortcuts or right-click to export

## Example

```java
/**
 * User Service
 */
public interface UserService {

    /**
     * Get user by ID
     *
     * @param id User ID
     * @return User info
     */
    User getUser(Long id);

    /**
     * Create user
     *
     * @param user User info
     * @return Created user
     */
    User createUser(User user);
}
```

## Configuration

```properties
mdoc.class.filter=groovy:it.hasAnn("org.apache.dubbo.config.annotation.Service") || it.hasAnn("com.alibaba.dubbo.config.annotation.Service")
```
