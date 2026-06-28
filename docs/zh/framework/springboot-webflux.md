# Spring Boot WebFlux

EasyYapi 支持 Spring Boot WebFlux 用于响应式 Web 应用。

## 支持的注解

WebFlux 使用与 Spring MVC 相同的注解：

- `@RestController`
- `@RequestMapping` / `@GetMapping` / `@PostMapping` 等
- `@RequestParam` / `@PathVariable` / `@RequestBody` 等

## 响应式类型

EasyYapi 可以处理响应式返回类型：

- `Mono<T>` — 提取为 `T`
- `Flux<T>` — 提取为 `List<T>`

## 示例

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public Mono<User> getUser(@PathVariable Long id) {
        // 返回 User（Mono 已解包）
    }

    @GetMapping
    public Flux<User> listUsers() {
        // 返回 List<User>（Flux 已解包）
    }
}
```

## 配置

使用与 [Spring Boot](./springboot) 相同的配置规则。
