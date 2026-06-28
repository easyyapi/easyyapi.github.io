# Complex class blocked

During export, you may encounter the error: `com.xxx.Xxx is too complex. Blocked cause by xxx reached xxx`.

## Cause

When a class has too many nested fields or circular references, the parsing process exceeds the complexity limit, causing this error.

## Solutions

### 1. Ignore unnecessary fields

Use `field.ignore` to exclude fields that do not need to be documented:

```properties
field.ignore=groovy:it.name() == "complexField" || it.type().name().startsWith("com.internal.")
```

### 2. Use type conversion

Convert complex types to simple types:

```properties
json.rule.convert=groovy:it.type().name()=="com.example.ComplexType" => java.util.Map
```

### 3. Increase the complexity limit

Configure the complexity limit in the settings (if your version supports it).

### 4. Use method.return.main

For methods that return wrapper types, extract the main type:

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```
