# 字段命名策略扩展

EasyYapi 内置了 9 个可选的 `field.name` 扩展，把导出的字段名统一转换为指定的命名风格。它们自 v3.2.7 起提供，**默认全部关闭**。

## 可用扩展

| 扩展 code | 规则值 | 示例 |
|-----------|--------|------|
| `field.name.uncapitalize` | `tool.uncapitalize(it.fieldName())` | `Barcode` → `barcode` |
| `field.name.capitalize` | `tool.capitalize(it.fieldName())` | `barcode` → `Barcode` |
| `field.name.camel-case` | `tool.toCamelCase(it.fieldName())` | `user_name` → `userName` |
| `field.name.pascal-case` | `tool.toPascalCase(it.fieldName())` | `user_name` → `UserName` |
| `field.name.snake-case` | `tool.toSnakeCase(it.fieldName())` | `URLValue` → `url_value` |
| `field.name.kebab-case` | `tool.toKebabCase(it.fieldName())` | `URLValue` → `url-value` |
| `field.name.lower-dot-case` | `tool.toLowerDotCase(it.fieldName())` | `URLValue` → `url.value` |
| `field.name.upper-snake-case` | `tool.upperCase(tool.toSnakeCase(it.fieldName()))` | `URLValue` → `URL_VALUE` |
| `field.name.upper-kebab-case` | `tool.upperCase(tool.toKebabCase(it.fieldName()))` | `URLValue` → `URL-VALUE` |

每个扩展就是一条 `field.name` Groovy 规则，没有新增 rule key、parser、设置项或配置语法。

## 启用扩展

在 **Extensions** 标签页中勾选需要的扩展：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Extensions</kbd>

勾选结果会以逗号分隔的 `extensionConfigs` 值保存，因此也可以在规则文件中设置。9 个扩展写入的是同一个 `field.name` key，**一次只启用一个**。

## 缩写词处理

`toCamelCase`、`toSnakeCase`、`toKebabCase`、`toPascalCase` 和 `toLowerDotCase`
共用同一个分词器：分隔符（`_`、`-`、`.`、空格）、驼峰起伏和缩写词边界都算词边界，
因此 `URLValue` 会拆成 `url` + `value`。这也是 System.Text.Json、Newtonsoft.Json、
Rails、Pydantic、lodash 以及 Jackson `KebabCaseStrategy` 采用的主流边界。

`tool.camel2Underline` 是保留的旧行为：它遵循 Jackson `SnakeCaseStrategy`，
连续大写字母不拆分，`URLValue` 会得到 `urlvalue`。已有规则按名字调用它时行为不变；
`field.name.snake-case` 扩展使用的是 `toSnakeCase`。参见 [tool](/zh/settings/tools/tool)。

自 v3.2.7 起，bean 属性名按 `java.beans.Introspector.decapitalize` 解析：
`getURLValue()` 解析为 `URLValue` 而不是 `uRLValue`。字段与其 accessor 因而会合并，
只导出一个属性 —— 对同时声明 `public String Barcode` 和 `getBarcode()` 的生成类很有用。
启用 `field.name.uncapitalize` 后两者都会映射为 `barcode`。

## 自定义规则

如果 9 个预置策略都不合适，可以在规则文件里直接用相同的 `tool` 方法：

````properties
field.name=groovy:```
    return tool.toSnakeCase(it.fieldName())
```
````

规则说明见 [field.name](/zh/settings/rules/field_name)，完整辅助方法见
[脚本工具](/zh/settings/tools)。

## 参见

- [字段排序扩展](/zh/framework/field-order)
- [tool](/zh/settings/tools/tool) —— 字符串与命名工具
