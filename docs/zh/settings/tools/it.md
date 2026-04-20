# it

当前上下文对象。这是最重要的工具，它提供对正在处理元素的访问。`it` 的类型取决于规则上下文。

## 上下文类型

`it` 的类型取决于规则上下文：

| 规则上下文 | `it` 类型 | 说明 |
|--------------|-----------|-------------|
| 类规则 | `ScriptPsiClassContext` | 类级别操作 |
| 方法规则 | `ScriptPsiMethodContext` | 方法级别操作 |
| 字段规则 | `ScriptPsiFieldContext` | 字段级别操作 |
| 参数规则 | `ScriptPsiParameterContext` | 参数级别操作 |
| 类型规则 | `ScriptTypeContext` | 类型信息 |

## 通用方法（所有上下文）

这些方法在所有上下文类型中都可用：

### 名称和文档

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.name()` | `String` | 获取元素名称 |
| `it.getName()` | `String?` | 获取元素名称（可空） |
| `it.doc()` | `String?` | 获取 Javadoc/KDoc 注释文本 |
| `it.doc(tag)` | `String?` | 获取特定文档标签值 |
| `it.docs(tag)` | `List<String>?` | 获取文档标签的所有值 |
| `it.hasDoc(tag)` | `Boolean` | 检查文档标签是否存在 |
| `it.doc(tag, subTag)` | `String?` | 获取带子标签的文档标签（如 `@param name desc`） |

### 注解

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.hasAnn(name)` | `Boolean` | 检查注解是否存在 |
| `it.ann(name)` | `String?` | 获取注解属性值（默认为 "value"） |
| `it.ann(name, attr)` | `String?` | 获取特定注解属性作为字符串 |
| `it.annValue(name)` | `Any?` | 获取注解属性值作为 Any |
| `it.annValue(name, attr)` | `Any?` | 获取特定注解属性作为 Any |
| `it.annMap(name)` | `Map<String, Any?>?` | 获取所有注解属性作为 Map |
| `it.annMaps(name)` | `List<Map<String, Any?>>?` | 获取所有可重复注解 |

### 修饰符

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.hasModifier(modifier)` | `Boolean` | 检查修饰符是否存在（如 "static"、"final"） |
| `it.modifiers()` | `List<String>` | 获取所有修饰符 |

### 源代码

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.sourceCode()` | `String?` | 获取完整源代码 |
| `it.defineCode()` | `String?` | 获取不带方法体的声明 |
| `it.psi()` | `PsiElement?` | 获取底层 PSI 元素 |

### 扩展数据

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.getExt(name)` | `Any?` | 从上下文获取扩展值 |
| `it.setExt(name, value)` | `void` | 在上下文设置扩展值 |

### 上下文信息

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.contextType()` | `String` | 获取上下文类型（"class"、"method"、"field"、"param"） |

## 类上下文方法

当 `it` 是 `ScriptPsiClassContext`（类规则）时可用：

### 基本信息

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.qualifiedName()` | `String?` | 获取完全限定类名 |
| `it.packageName()` | `String?` | 获取包名 |
| `it.type()` | `ScriptTypeContext` | 获取类型信息 |

### 成员

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.methods()` | `Array<ScriptPsiMethodContext>` | 获取所有方法 |
| `it.methodCnt()` | `Int` | 获取方法数量 |
| `it.fields()` | `Array<ScriptPsiFieldContext>` | 获取所有字段 |
| `it.fieldCnt()` | `Int` | 获取字段数量 |

### 类型检查

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.isExtend(superClass)` | `Boolean` | 检查是否继承/实现某个类 |
| `it.isMap()` | `Boolean` | 检查是否是 Map 类型 |
| `it.isCollection()` | `Boolean` | 检查是否是 Collection 类型 |
| `it.isArray()` | `Boolean` | 检查是否是数组类型 |
| `it.isInterface()` | `Boolean` | 检查是否是接口 |
| `it.isAnnotationType()` | `Boolean` | 检查是否是注解类型 |
| `it.isEnum()` | `Boolean` | 检查是否是枚举 |
| `it.isPrimitive()` | `Boolean` | 检查是否是基本类型 |
| `it.isPrimitiveWrapper()` | `Boolean` | 检查是否是基本类型包装类 |
| `it.isNormalType()` | `Boolean` | 检查是否是普通类型（基本类型、包装类、String、Object） |

### 可见性

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.isPublic()` | `Boolean` | 检查是否是 public |
| `it.isProtected()` | `Boolean` | 检查是否是 protected |
| `it.isPrivate()` | `Boolean` | 检查是否是 private |
| `it.isPackagePrivate()` | `Boolean` | 检查是否是包私有 |

### 类层次结构

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.isInnerClass()` | `Boolean` | 检查是否是内部类 |
| `it.isStatic()` | `Boolean` | 检查是否是 static（对于内部类） |
| `it.outerClass()` | `ScriptPsiClassContext?` | 获取内部类的外部类 |
| `it.superClass()` | `ScriptPsiClassContext?` | 获取父类 |
| `it.extends()` | `Array<ScriptPsiClassContext>?` | 获取继承的类 |
| `it.implements()` | `Array<ScriptPsiClassContext>?` | 获取实现的接口 |

## 方法上下文方法

当 `it` 是 `ScriptPsiMethodContext`（方法规则）时可用：

### 返回类型

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.returnType()` | `ScriptTypeContext?` | 获取返回类型 |
| `it.type()` | `ScriptTypeContext?` | returnType() 的别名 |

### 参数

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.args()` | `Array<ScriptPsiParameterContext>` | 获取所有参数 |
| `it.params()` | `Array<ScriptPsiParameterContext>` | args() 的别名 |
| `it.parameters()` | `Array<ScriptPsiParameterContext>` | args() 的别名 |
| `it.argTypes()` | `Array<ScriptTypeContext>` | 获取参数类型 |
| `it.argCnt()` | `Int` | 获取参数数量 |
| `it.paramCnt()` | `Int` | argCnt() 的别名 |
| `it.isVarArgs()` | `Boolean` | 检查是否有可变参数 |

### 所属类

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.containingClass()` | `ScriptPsiClassContext?` | 获取所属类 |
| `it.defineClass()` | `ScriptPsiClassContext?` | containingClass() 的别名 |

### 方法属性

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.isConstructor()` | `Boolean` | 检查是否是构造函数 |
| `it.isOverride()` | `Boolean` | 检查是否重写父类方法 |
| `it.isDefault()` | `Boolean` | 检查是否是默认方法（接口） |
| `it.isAbstract()` | `Boolean` | 检查是否是抽象方法 |
| `it.isSynchronized()` | `Boolean` | 检查是否是同步方法 |
| `it.isNative()` | `Boolean` | 检查是否是本地方法 |
| `it.throwsExceptions()` | `Array<String>` | 获取抛出的异常 |

## 字段上下文方法

当 `it` 是 `ScriptPsiFieldContext`（字段规则）时可用：

### 类型

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.type()` | `ScriptTypeContext` | 获取字段类型 |
| `it.jsonType()` | `ScriptTypeContext` | type() 的别名 |

### 所属类

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.containingClass()` | `ScriptPsiClassContext?` | 获取所属类 |
| `it.defineClass()` | `ScriptPsiClassContext?` | containingClass() 的别名 |

### 字段属性

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.isEnumField()` | `Boolean` | 检查是否是枚举常量 |
| `it.asEnumField()` | `ScriptPsiEnumConstantContext?` | 获取枚举常量上下文 |
| `it.isStatic()` | `Boolean` | 检查是否是 static |
| `it.isFinal()` | `Boolean` | 检查是否是 final |
| `it.isTransient()` | `Boolean` | 检查是否是 transient |
| `it.isVolatile()` | `Boolean` | 检查是否是 volatile |
| `it.constantValue()` | `Any?` | 获取编译时常量值 |

## 参数上下文方法

当 `it` 是 `ScriptPsiParameterContext`（参数规则）时可用：

### 类型

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.type()` | `ScriptTypeContext` | 获取参数类型 |
| `it.jsonType()` | `ScriptTypeContext` | type() 的别名 |

### 参数属性

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.isVarArgs()` | `Boolean` | 检查是否是可变参数 |
| `it.isFinal()` | `Boolean` | 检查是否是 final |

### 声明

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.method()` | `ScriptPsiMethodContext?` | 获取声明该参数的方法 |
| `it.declaration()` | `ScriptItContext?` | 获取声明该参数的元素 |

## 类型上下文方法

当 `it` 是 `ScriptTypeContext` 时可用：

### 名称

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.name()` | `String` | 获取完整类型名（如 "java.util.List<java.lang.String>"） |
| `it.getName()` | `String` | name() 的别名 |
| `it.simpleName()` | `String` | 获取简单类型名（如 "List"） |
| `it.getSimpleName()` | `String` | simpleName() 的别名 |

### 类型检查

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.isExtend(superClass)` | `Boolean` | 检查是否继承某个类 |
| `it.isMap()` | `Boolean` | 检查是否是 Map 类型 |
| `it.isCollection()` | `Boolean` | 检查是否是 Collection 类型 |
| `it.isArray()` | `Boolean` | 检查是否是数组类型 |
| `it.isPrimitive()` | `Boolean` | 检查是否是基本类型 |
| `it.isPrimitiveWrapper()` | `Boolean` | 检查是否是基本类型包装类 |
| `it.isNormalType()` | `Boolean` | 检查是否是普通类型 |
| `it.isInterface()` | `Boolean` | 检查是否是接口 |
| `it.isAnnotationType()` | `Boolean` | 检查是否是注解类型 |
| `it.isEnum()` | `Boolean` | 检查是否是枚举 |

### 成员

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `it.methods()` | `Array<ScriptPsiMethodContext>` | 获取所有方法 |
| `it.fields()` | `Array<ScriptPsiFieldContext>` | 获取所有字段 |

## 示例

### 类规则示例

```properties
class.name=groovy:'''
if (it.isExtend("java.lang.Exception")) {
    return it.simpleName() + "Exception"
}
return it.name()
'''
```

### 方法规则示例

```properties
method.name=groovy:'''
def name = it.name()
if (it.hasAnn("org.springframework.web.bind.annotation.GetMapping")) {
    def path = it.ann("GetMapping", "value")
    return path ?: name
}
return name
'''
```

### 字段规则示例

```properties
field.mock=groovy:'''
def type = it.type()
if (type.isExtend("java.lang.Number")) {
    return "0"
}
if (type.name() == "java.lang.String") {
    return "mock_" + it.name()
}
if (type.isCollection()) {
    return "[]"
}
return null
'''
```

### 参数规则示例

```properties
param.name=groovy:'''
def name = it.name()
if (it.hasAnn("org.springframework.web.bind.annotation.RequestParam")) {
    return it.ann("RequestParam", "value") ?: name
}
return name
'''
```

## 相关链接

- [api](./api) - 用于修改端点元数据的 API 工具
- [fieldContext](./fieldContext) - 字段上下文工具
