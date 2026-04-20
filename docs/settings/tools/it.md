# it

The current context object. This is the most important tool as it provides access to the element being processed. The type of `it` depends on the rule context.

## Context Types

The type of `it` depends on the rule context:

| Rule Context | `it` Type | Description |
|--------------|-----------|-------------|
| Class rules | `ScriptPsiClassContext` | Class-level operations |
| Method rules | `ScriptPsiMethodContext` | Method-level operations |
| Field rules | `ScriptPsiFieldContext` | Field-level operations |
| Parameter rules | `ScriptPsiParameterContext` | Parameter-level operations |
| Type rules | `ScriptTypeContext` | Type information |

## Common Methods (All Contexts)

These methods are available on all context types:

### Name and Documentation

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.name()` | `String` | Get the element name |
| `it.getName()` | `String?` | Get the element name (nullable) |
| `it.doc()` | `String?` | Get the Javadoc/KDoc comment text |
| `it.doc(tag)` | `String?` | Get a specific doc tag value |
| `it.docs(tag)` | `List<String>?` | Get all values for a doc tag |
| `it.hasDoc(tag)` | `Boolean` | Check if a doc tag exists |
| `it.doc(tag, subTag)` | `String?` | Get a doc tag with sub-tag (e.g., `@param name desc`) |

### Annotations

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.hasAnn(name)` | `Boolean` | Check if an annotation exists |
| `it.ann(name)` | `String?` | Get annotation attribute value (defaults to "value") |
| `it.ann(name, attr)` | `String?` | Get specific annotation attribute as string |
| `it.annValue(name)` | `Any?` | Get annotation attribute value as Any |
| `it.annValue(name, attr)` | `Any?` | Get specific annotation attribute as Any |
| `it.annMap(name)` | `Map<String, Any?>?` | Get all annotation attributes as map |
| `it.annMaps(name)` | `List<Map<String, Any?>>?` | Get all repeatable annotations |

### Modifiers

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.hasModifier(modifier)` | `Boolean` | Check if a modifier exists (e.g., "static", "final") |
| `it.modifiers()` | `List<String>` | Get all modifiers |

### Source Code

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.sourceCode()` | `String?` | Get the full source code |
| `it.defineCode()` | `String?` | Get the declaration without body |
| `it.psi()` | `PsiElement?` | Get the underlying PSI element |

### Extension Data

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.getExt(name)` | `Any?` | Get extension value from context |
| `it.setExt(name, value)` | `void` | Set extension value on context |

### Context Info

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.contextType()` | `String` | Get the context type ("class", "method", "field", "param") |

## Class Context Methods

Available when `it` is a `ScriptPsiClassContext` (class rules):

### Basic Info

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.qualifiedName()` | `String?` | Get fully qualified class name |
| `it.packageName()` | `String?` | Get package name |
| `it.type()` | `ScriptTypeContext` | Get type information |

### Members

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.methods()` | `Array<ScriptPsiMethodContext>` | Get all methods |
| `it.methodCnt()` | `Int` | Get method count |
| `it.fields()` | `Array<ScriptPsiFieldContext>` | Get all fields |
| `it.fieldCnt()` | `Int` | Get field count |

### Type Checking

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.isExtend(superClass)` | `Boolean` | Check if extends/implements a class |
| `it.isMap()` | `Boolean` | Check if is a Map type |
| `it.isCollection()` | `Boolean` | Check if is a Collection type |
| `it.isArray()` | `Boolean` | Check if is an array type |
| `it.isInterface()` | `Boolean` | Check if is an interface |
| `it.isAnnotationType()` | `Boolean` | Check if is an annotation type |
| `it.isEnum()` | `Boolean` | Check if is an enum |
| `it.isPrimitive()` | `Boolean` | Check if is a primitive type |
| `it.isPrimitiveWrapper()` | `Boolean` | Check if is a primitive wrapper |
| `it.isNormalType()` | `Boolean` | Check if is a normal type (primitive, wrapper, String, Object) |

### Visibility

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.isPublic()` | `Boolean` | Check if is public |
| `it.isProtected()` | `Boolean` | Check if is protected |
| `it.isPrivate()` | `Boolean` | Check if is private |
| `it.isPackagePrivate()` | `Boolean` | Check if is package-private |

### Class Hierarchy

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.isInnerClass()` | `Boolean` | Check if is an inner class |
| `it.isStatic()` | `Boolean` | Check if is static (for inner classes) |
| `it.outerClass()` | `ScriptPsiClassContext?` | Get outer class for inner classes |
| `it.superClass()` | `ScriptPsiClassContext?` | Get super class |
| `it.extends()` | `Array<ScriptPsiClassContext>?` | Get extended classes |
| `it.implements()` | `Array<ScriptPsiClassContext>?` | Get implemented interfaces |

## Method Context Methods

Available when `it` is a `ScriptPsiMethodContext` (method rules):

### Return Type

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.returnType()` | `ScriptTypeContext?` | Get return type |
| `it.type()` | `ScriptTypeContext?` | Alias for returnType() |

### Parameters

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.args()` | `Array<ScriptPsiParameterContext>` | Get all parameters |
| `it.params()` | `Array<ScriptPsiParameterContext>` | Alias for args() |
| `it.parameters()` | `Array<ScriptPsiParameterContext>` | Alias for args() |
| `it.argTypes()` | `Array<ScriptTypeContext>` | Get parameter types |
| `it.argCnt()` | `Int` | Get parameter count |
| `it.paramCnt()` | `Int` | Alias for argCnt() |
| `it.isVarArgs()` | `Boolean` | Check if has varargs |

### Containing Class

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.containingClass()` | `ScriptPsiClassContext?` | Get the containing class |
| `it.defineClass()` | `ScriptPsiClassContext?` | Alias for containingClass() |

### Method Properties

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.isConstructor()` | `Boolean` | Check if is a constructor |
| `it.isOverride()` | `Boolean` | Check if overrides a super method |
| `it.isDefault()` | `Boolean` | Check if is a default method (interface) |
| `it.isAbstract()` | `Boolean` | Check if is abstract |
| `it.isSynchronized()` | `Boolean` | Check if is synchronized |
| `it.isNative()` | `Boolean` | Check if is native |
| `it.throwsExceptions()` | `Array<String>` | Get thrown exceptions |

## Field Context Methods

Available when `it` is a `ScriptPsiFieldContext` (field rules):

### Type

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.type()` | `ScriptTypeContext` | Get field type |
| `it.jsonType()` | `ScriptTypeContext` | Alias for type() |

### Containing Class

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.containingClass()` | `ScriptPsiClassContext?` | Get the containing class |
| `it.defineClass()` | `ScriptPsiClassContext?` | Alias for containingClass() |

### Field Properties

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.isEnumField()` | `Boolean` | Check if is an enum constant |
| `it.asEnumField()` | `ScriptPsiEnumConstantContext?` | Get enum constant context |
| `it.isStatic()` | `Boolean` | Check if is static |
| `it.isFinal()` | `Boolean` | Check if is final |
| `it.isTransient()` | `Boolean` | Check if is transient |
| `it.isVolatile()` | `Boolean` | Check if is volatile |
| `it.constantValue()` | `Any?` | Get compile-time constant value |

## Parameter Context Methods

Available when `it` is a `ScriptPsiParameterContext` (parameter rules):

### Type

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.type()` | `ScriptTypeContext` | Get parameter type |
| `it.jsonType()` | `ScriptTypeContext` | Alias for type() |

### Parameter Properties

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.isVarArgs()` | `Boolean` | Check if is varargs |
| `it.isFinal()` | `Boolean` | Check if is final |

### Declaration

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.method()` | `ScriptPsiMethodContext?` | Get the declaring method |
| `it.declaration()` | `ScriptItContext?` | Get the declaring element |

## Type Context Methods

Available when `it` is a `ScriptTypeContext`:

### Name

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.name()` | `String` | Get full type name (e.g., "java.util.List<java.lang.String>") |
| `it.getName()` | `String` | Alias for name() |
| `it.simpleName()` | `String` | Get simple type name (e.g., "List") |
| `it.getSimpleName()` | `String` | Alias for simpleName() |

### Type Checking

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.isExtend(superClass)` | `Boolean` | Check if extends a class |
| `it.isMap()` | `Boolean` | Check if is a Map type |
| `it.isCollection()` | `Boolean` | Check if is a Collection type |
| `it.isArray()` | `Boolean` | Check if is an array type |
| `it.isPrimitive()` | `Boolean` | Check if is a primitive type |
| `it.isPrimitiveWrapper()` | `Boolean` | Check if is a primitive wrapper |
| `it.isNormalType()` | `Boolean` | Check if is a normal type |
| `it.isInterface()` | `Boolean` | Check if is an interface |
| `it.isAnnotationType()` | `Boolean` | Check if is an annotation type |
| `it.isEnum()` | `Boolean` | Check if is an enum |

### Members

| Method | Return Type | Description |
|--------|-------------|-------------|
| `it.methods()` | `Array<ScriptPsiMethodContext>` | Get all methods |
| `it.fields()` | `Array<ScriptPsiFieldContext>` | Get all fields |

## Examples

### Class Rule Example

```properties
class.name=groovy:'''
if (it.isExtend("java.lang.Exception")) {
    return it.simpleName() + "Exception"
}
return it.name()
'''
```

### Method Rule Example

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

### Field Rule Example

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

### Parameter Rule Example

```properties
param.name=groovy:'''
def name = it.name()
if (it.hasAnn("org.springframework.web.bind.annotation.RequestParam")) {
    return it.ann("RequestParam", "value") ?: name
}
return name
'''
```

## See Also

- [api](./api) - API utilities for modifying endpoint metadata
- [fieldContext](./fieldContext) - Field context utilities
