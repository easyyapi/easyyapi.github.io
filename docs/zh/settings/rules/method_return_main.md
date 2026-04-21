# method.return.main

指定响应类型中用于放置 `@return` 文档注释的字段名称。

对于 `Result<T>` 等包装类型，此规则可将 `@return` Javadoc 附加到主要数据字段（如 `data`），而非包装类型本身。

## 用法

```properties
method.return.main[groovy:it.returnType().isExtend("Result")]=data
```

这告诉 EasyYapi：对于返回类型继承自 `Result` 的方法，将 `@return` 文档注释附加到名为 `data` 的字段上。

## 示例

给定如下方法：

```java
/**
 * @return 处理结果
 */
public Result<Void> process() { ... }
```

配合此规则：

```properties
method.return.main[groovy:it.returnType().isExtend("Result")]=data
```

`@return "处理结果"` 注释将被附加到 `Result` 响应模型中的 `data` 字段上，而非 `Result` 包装类型本身。

## 自动推断

当未设置 `method.return.main` 规则时，如果 IDE 设置中的 **Infer Return Main** 已启用（默认开启），EasyYapi 可以自动检测主字段。它会查找响应模型中第一个泛型类型参数字段（如 `Result<T>` 中的 `data: T`）。

可在以下位置配置：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>
