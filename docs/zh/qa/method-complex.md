# 复杂类被阻止

导出时可能会遇到错误：`com.xxx.Xxx is too complex. Blocked cause by xxx reached xxx`。

## 原因

当类具有过多的嵌套字段或循环引用时，解析过程会超过复杂度限制，从而导致此错误。

## 解决方案

### 1. 忽略不必要的字段

使用 `field.ignore` 排除不需要文档化的字段：

```properties
field.ignore=groovy:it.name() == "complexField" || it.type().name().startsWith("com.internal.")
```

### 2. 使用类型转换

将复杂类型转换为简单类型：

```properties
json.rule.convert=groovy:it.type().name()=="com.example.ComplexType" => java.util.Map
```

### 3. 增加复杂度限制

在设置中配置复杂度限制（如果你的版本支持）。

### 4. 使用 method.return.main

对于返回包装类型的方法，提取主要类型：

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```
