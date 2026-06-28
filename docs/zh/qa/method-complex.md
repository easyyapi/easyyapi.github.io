# 复杂类被阻止

当一个类嵌套很深、存在递归引用，或者字段非常多时，EasyYapi 会在达到安全上限后停止展开字段。剩余字段会被静默丢弃，并在 IDE 日志中写下一行 `INFO` 级别记录：

```
Element limit exceeded while parsing <全限定类名>. Processed <n> elements. Stopping field expansion.
```

## 内置上限

| 配置键 | 默认值 | 含义 |
|---|---|---|
| `max.elements` | `512` | 单次构建操作中允许展开的字段总数。 |
| `max.deep` | `8` | 解析嵌套类型字段时的最大深度。 |

两者都可以从任意规则来源（工程、扩展、远程、全局）读取。达到上限时 EasyYapi **不会**抛出异常，只是停止为该响应/请求体继续展开字段。

## 解决方案

### 1. 抬高上限

如果类确实需要更多字段，可以在 `.easy.api.config` 中抬高上限：

```properties
max.elements=2048
max.deep=16
```

> 设置过高可能让导出变慢甚至 OOM，建议逐步抬升。

### 2. 忽略不必要的字段

用 [`field.ignore`](../settings/rules/field_ignore) 排除不需要文档化的字段：

```properties
field.ignore=groovy:it.name() == "complexField" || it.type().name().startsWith("com.internal.")
```

### 3. 把复杂类型转换为简单类型

用 [`json.rule.convert`](../settings/rules/json_rule_convert) 把复杂类型替换为简单类型：

```properties
json.rule.convert=groovy:it.type().name()=="com.example.ComplexType" => java.util.Map
```

### 4. 覆盖返回类型

如果方法的声明返回类型是膨胀的根源，用 [`method.return`](./multiple-return-types) 覆盖为更简单的类型：

```properties
method.return=groovy:"com.example.SimpleResult<" + it.returnType().name() + ">"
```

> 不要与 `method.return.main` 混淆——后者只决定把 `@return` 文档注释挂到哪个字段上，并不会改变响应 schema。
