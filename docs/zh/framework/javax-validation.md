# javax.validation

EasyYapi 支持 javax.validation (Bean Validation) 规范，可以自动提取验证约束信息并包含在 API 文档中。

## 支持的注解

### 空值检查

- `@NotNull` — 不能为 null
- `@NotBlank` — 不能为空白
- `@NotEmpty` — 不能为空

### 数值检查

- `@Min` — 最小值
- `@Max` — 最大值
- `@DecimalMin` — 最小小数
- `@DecimalMax` — 最大小数
- `@Positive` — 正数
- `@PositiveOrZero` — 正数或零
- `@Negative` — 负数
- `@NegativeOrZero` — 负数或零

### 字符串检查

- `@Size` — 大小范围
- `@Length` — 长度范围
- `@Pattern` — 正则表达式
- `@Email` — 邮箱格式

### 日期检查

- `@Past` — 过去的日期
- `@PastOrPresent` — 过去或当前日期
- `@Future` — 未来的日期
- `@FutureOrPresent` — 未来或当前日期

### 其他

- `@Valid` — 级联验证

## 示例

```java
public class CreateUserRequest {

    @NotBlank(message = "用户名不能为空")
    @Size(min = 2, max = 20, message = "用户名长度为2-20个字符")
    private String username;

    @NotBlank(message = "密码不能为空")
    @Size(min = 6, max = 20, message = "密码长度为6-20个字符")
    private String password;

    @Email(message = "邮箱格式不正确")
    private String email;

    @Min(value = 0, message = "年龄不能为负数")
    @Max(value = 150, message = "年龄不能超过150")
    private Integer age;
}
```

## 配置

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank") || it.hasAnn("javax.validation.constraints.NotEmpty")
```
