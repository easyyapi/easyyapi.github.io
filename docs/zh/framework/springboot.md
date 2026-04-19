# Spring Boot

EasyYapi 完整支持 Spring Boot 框架，可以自动识别 Spring MVC 和 Spring WebFlux 注解。

## 支持的注解

### 控制器注解

- `@RestController`
- `@Controller`

### 请求映射注解

- `@RequestMapping`
- `@GetMapping`
- `@PostMapping`
- `@PutMapping`
- `@DeleteMapping`
- `@PatchMapping`

### 参数注解

- `@RequestParam` — 查询参数
- `@PathVariable` — 路径参数
- `@RequestBody` — 请求体
- `@RequestHeader` — 请求头
- `@CookieValue` — Cookie 值
- `@SessionAttribute` — 会话属性

## 示例

```java
/**
 * 用户管理 API
 *
 * @module 用户管理
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    /**
     * 获取用户列表
     *
     * @param page 页码
     * @param size 每页数量
     * @return 用户列表
     */
    @GetMapping
    public List<User> listUsers(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        // ...
    }

    /**
     * 创建用户
     *
     * @param user 用户信息
     * @return 创建的用户
     */
    @PostMapping
    public User createUser(@RequestBody User user) {
        // ...
    }
}
```

## 配置

使用以下规则自定义 Spring Boot API 文档生成：

```properties
class.is.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController")
class.prefix.path=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value("value")
```
