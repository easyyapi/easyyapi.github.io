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

### Record Components

A Java `record` component carries no per-field comment, so document the components with `@param` tags on the record's own Javadoc. Since v3.2.6 they are exported as the field descriptions, in every channel:

```java
/**
 * User record
 *
 * @param id User ID
 * @param name User name
 */
public record UserRecord(Long id, String name) {}
```

## Duplicate Title in the Description

The first line of a method comment becomes both the API name and the first line
of the exported description. Since v3.2.7, EasyYapi drops that repeated title
from the description by default when exporting, sending, or scanning an API:

```java
/**
 * Get user by id
 *
 * Returns the user matching the given id.
 */
```

The exported description now starts with `Returns the user matching the given
id.` instead of repeating `Get user by id`.

The comparison runs on the final `name` and `description` fields, so it also
covers names set by `api.name` / `method.doc` rules or Swagger annotations.
Remaining lines keep their original indentation, so Markdown code blocks stay
intact.

Turn it off with **Remove API name duplicated in description** under
`Settings > Other Settings > EasyApi > Parsing & Output > Output Format`
(`removeDuplicateTitleFromDescription`). The change applies to the next parse,
without restarting the IDE.

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

KDoc descriptions are also used as API titles and as candidates for API folder names. Writing a clear first paragraph for a Kotlin API or class therefore improves both exported naming and grouping; explicit name or folder rules still take precedence.

## ScalaDoc

ScalaDoc is the documentation comment format in Scala.