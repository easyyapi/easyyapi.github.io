# Groovy Local Extension

EasyYapi supports Groovy local extensions for advanced customization. You can write custom Groovy scripts that are loaded at startup and provide additional functionality.

## Configuration

Create a Groovy extension file and configure its path:

```properties
groovy.ext.config=path/to/extension.groovy
```

## Example Extension

```groovy
// extension.groovy

// Add a custom method to the tool context
def customMock(String type) {
    switch (type) {
        case "java.lang.String": return "custom_string"
        case "java.lang.Integer": return 42
        case "java.lang.Boolean": return true
        default: return null
    }
}

// Register the method
tool.register("customMock", this.&customMock)
```

## Use in Rules

```properties
field.mock=groovy:'''
tool.customMock(it.type().name()) ?: "default"
'''
```
