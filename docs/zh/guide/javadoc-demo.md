# Javadoc 示例

本页演示如何为 EasyYapi 编写 Javadoc 注释。

## 基础 API

```java
/**
 * 创建用户
 *
 * @param user 用户信息
 * @return 创建后的用户
 */
@PostMapping
public User createUser(@RequestBody User user) {}
```

## 带标签的 API

```java
/**
 * 获取用户列表
 *
 * @module user-management
 * @tag user
 * @tag list
 */
@GetMapping
public List<User> listUsers() {}
```

## 带 Mock 的 API

```java
public class User {
    /**
     * 用户名
     * @mock admin
     */
    private String name;

    /**
     * 年龄
     * @mock 25
     */
    private Integer age;
}
```

## 废弃的 API

```java
/**
 * 根据 ID 获取用户
 *
 * @deprecated 使用 getUserV2 替代
 */
@Deprecated
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```
