# 泛型类型

EasyYapi 支持 API 文档中的泛型类型。

## 泛型返回类型

对于返回 `Result<T>` 等泛型包装类型的方法，使用 `method.return.main` 提取主要类型：

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```

## 类型转换

使用 `json.rule.convert` 转换泛型类型：

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

详见 [json.rule.convert](/zh/settings/rules/json_rule_convert)、[method.return](/zh/settings/rules/method_return) 和 [method.return.main](/zh/settings/rules/method_return_main)。
