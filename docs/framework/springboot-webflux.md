# Spring Boot WebFlux

EasyYapi supports Spring Boot WebFlux for reactive web applications.

## Supported Annotations

WebFlux uses the same annotations as Spring MVC:

- `@RestController`
- `@RequestMapping` / `@GetMapping` / `@PostMapping` etc.
- `@RequestParam` / `@PathVariable` / `@RequestBody` etc.

## Reactive Types

EasyYapi can handle reactive return types:

- `Mono<T>` — Extracted as `T`
- `Flux<T>` — Extracted as `List<T>`

## Example

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public Mono<User> getUser(@PathVariable Long id) {
        // Returns User (Mono unwrapped)
    }

    @GetMapping
    public Flux<User> listUsers() {
        // Returns List<User> (Flux unwrapped)
    }
}
```

## Configuration

Use the same configuration rules as [Spring Boot](./springboot).
