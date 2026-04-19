# Feign

EasyYapi 支持 Spring Cloud OpenFeign 声明式 HTTP 客户端。

## 支持的注解

- `@FeignClient`
- `@RequestMapping` / `@GetMapping` / `@PostMapping` 等

## 示例

```java
/**
 * 用户服务客户端
 */
@FeignClient(name = "user-service", url = "http://user-service")
public interface UserClient {

    /**
     * 获取用户信息
     *
     * @param id 用户ID
     * @return 用户信息
     */
    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable("id") Long id);

    /**
     * 创建用户
     *
     * @param user 用户信息
     * @return 创建的用户
     */
    @PostMapping("/api/users")
    User createUser(@RequestBody User user);
}
```

## 配置

```properties
class.is.feign.ctrl=groovy:it.hasAnn("org.springframework.cloud.openfeign.FeignClient")
```
