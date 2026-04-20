# Comment Standards

EasyYapi generates API documentation based on Javadoc, KDoc, and ScalaDoc.

## Javadoc

Javadoc is the standard documentation comment format in Java. EasyYapi uses Javadoc to extract API names, descriptions, and parameter information.

### Basic Format

```java
/**
 * API name (first line)
 *
 * API detailed description
 *
 * @param name Parameter description
 * @return Return value description
 */
@GetMapping("/hello")
public String hello(@RequestParam String name) {
    return "Hello " + name;
}
```

### Common Tags

| Tag | Purpose | Example |
|-----|---------|---------|
| `@param` | Parameter description | `@param name Username` |
| `@return` | Return value description | `@return Greeting message` |
| `@deprecated` | Mark as deprecated | `@deprecated Use helloV2 instead` |
| `@module` | API grouping | `@module User Management` |
| `@mock` | Mock data | `@mock admin` |
| `@see` | See also | `@see User` |

## KDoc

KDoc is the documentation comment format in Kotlin, similar to Javadoc but supports Markdown syntax.

### Basic Format

```kotlin
/**
 * API name
 *
 * API detailed description
 *
 * @param name Parameter description
 * @return Return value description
 */
@GetMapping("/hello")
fun hello(@RequestParam name: String): String {
    return "Hello $name"
}
```

## ScalaDoc

ScalaDoc is the documentation comment format in Scala.