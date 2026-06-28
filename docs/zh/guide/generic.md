# 泛型类型

EasyYapi 会自动解析 API 文档中的泛型类型——`Result<User>` 会被展开为一个 `Result` 对象，其 `data` 字段具有 `User` 的结构，无需额外配置。

## 覆盖返回类型

如果声明的返回类型不能反映你希望文档化的内容（例如方法返回 `Object` 或原始类型），用 `method.return` 覆盖为具体的泛型类型：

```properties
method.return=groovy:"com.example.Result<" + it.returnType().name() + ">"
```

## 把 `@return` 挂到包装类型的字段上

`method.return.main` **不会**改变返回类型——它指定响应类型内部的**字段名**，方法的 `@return` 文档注释会挂到该字段上：

```properties
method.return.main=groovy:"data"
```

对于 `Result<User>`，应用上述规则后，`@return` 注释会挂到 `data` 字段上，而不是根 `Result` 对象上。

## 类型转换

用 `json.rule.convert` 转换类型：

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

详见 [json.rule.convert](/zh/settings/rules/json_rule_convert)、[method.return](/zh/settings/rules/method_return) 和 [method.return.main](/zh/settings/rules/method_return_main)。
