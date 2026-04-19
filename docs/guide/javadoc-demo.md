# Javadoc Demo

This page demonstrates how to write Javadoc comments for EasyYapi.

## Basic API

```java
/**
 * Create user
 *
 * @param user user info
 * @return created user
 */
@PostMapping
public User createUser(@RequestBody User user) {}
```

## API with Tags

```java
/**
 * Get user list
 *
 * @module user-management
 * @tag user
 * @tag list
 */
@GetMapping
public List<User> listUsers() {}
```

## API with Mock

```java
public class User {
    /**
     * Username
     * @mock admin
     */
    private String name;

    /**
     * Age
     * @mock 25
     */
    private Integer age;
}
```

## Deprecated API

```java
/**
 * Get user by ID
 *
 * @deprecated Use getUserV2 instead
 */
@Deprecated
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```
