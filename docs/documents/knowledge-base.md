# Plugin Knowledge Base

This document contains core knowledge about the EasyYapi plugin to assist AI systems in understanding and using the plugin.

## Plugin Overview

EasyYapi is an IntelliJ platform plugin designed to simplify API documentation generation and management. It supports exporting API interfaces from Java/Kotlin projects to various formats, including YApi, Postman, and Markdown.

## Rule Writing Guidelines

### Simple Rules

#### Rule Types and Syntax
There are two main types of rules based on their return values:

1. **Boolean Rules** (return true/false):
   - Used for decisions like whether to do something or not, whether to filter or not
   - Basic syntax options:
     - `#xxx` - Check if tag 'xxx' exists in comments
     - `@xxx` - Check if annotation 'xxx' exists
   - Additional operators:
     - `!` - Negate the result of a rule (e.g., `!@Deprecated` checks if annotation does NOT exist)

2. **String/Text Rules** (return text content):
   - Used for getting content like API names, field descriptions, etc.
   - Basic syntax options:
     - `#xxx` - Get description from tag 'xxx' in comments
     - `@xxx` - Get the 'value' attribute from annotation 'xxx'
     - `@xxx#yyy` - Get the 'yyy' attribute from annotation 'xxx'
   - Additional operators:
     - `~` - Append a suffix to the result (e.g., `~suffix` will append "suffix" to the result)

#### Examples

##### Boolean Rule Examples:
```java
/**
 * @ignore
 */
public class Example {
    // Use #ignore to check if @ignore tag exists
    // Returns: true
    
    // Use !#ignore to check if @ignore tag does NOT exist
    // Returns: false
}

@Deprecated
public class Example {
    // Use @Deprecated to check if @Deprecated annotation exists
    // Returns: true
    
    // Use !@Deprecated to check if @Deprecated annotation does NOT exist
    // Returns: false
}
```

##### String Rule Examples:
```java
/**
 * @description This is an example API
 */
@ApiOperation(value = "Example API", notes = "Detailed notes")
public class Example {
    // Use #description to get "This is an example API"
    // Use @ApiOperation to get "Example API" (default value attribute)
    // Use @ApiOperation#notes to get "Detailed notes"
    // Use ~" (v1)" to append " (v1)" to any result
    // e.g., "#description~" (v1)" would return "This is an example API (v1)"
}
```

### Advanced Script Rules

#### Groovy Rules
Groovy scripts can be specified in two formats:

1. Single line:
```properties
rule=groovy:groovyScript
```

2. Multi-line:

``````properties
rule=groovy:```
def result = someOperation()
if (result) {
    return "success"
} else {
    return "failure"
}
```
``````

## AI Assistant Guidelines

When providing assistance for EasyYapi plugin questions, follow this structured approach:

### 1. Identify Applicable Rules
- Determine which EasyYapi rule(s) would address the user's needs
- Review the rule documentation to understand its purpose, context, and return type
- Consider possible combinations of rules if the requirement is complex

### 2. Analyze Code Context and Framework Usage
- Ask the user about existing frameworks in their project that might already provide necessary annotations
- Look for existing patterns in the user's code that can be leveraged:
  - JavaDoc comments (`@tag` style)
  - Annotations from common frameworks (Spring, Jackson, Swagger, etc.)
  - Method/class naming conventions
  - Structure of existing models/controllers

### 3. Prioritize Solutions (In Order of Preference)
- **First Option**: Leverage existing frameworks
  ```properties
  # Example: If user has Jackson in their project
  field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore
  ```

- **Second Option**: Use JavaDoc tags (preferred over custom annotations)
  ```properties
  # Example: Using JavaDoc tags
  field.ignore=#ignore
  ```

- **Third Option**: Ask if user has any custom annotations for the purpose
  ```properties
  # Example: If user has custom annotations
  field.ignore=@com.example.IgnoreField
  ```

- **Last Option**: Suggest adding one of the above approaches

### 4. Demonstrate Implementation with Examples
- Show complete examples with:
  - Configuration in .properties format
  - Sample Java/Kotlin code showing how to apply the solution
  - Explanation of how the rule processes the code

### 5. Provide Framework-Specific Examples
For common tasks, demonstrate solutions using popular frameworks:

**Field Ignoring Example**:
```properties
# For Jackson users
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore

# For Spring users
field.ignore=@org.springframework.data.annotation.Transient

# For Gson users
field.ignore=@com.google.gson.annotations.Expose#serialize[false]

# Framework-agnostic solution (JavaDoc)
field.ignore=#ignore

# By field name (ignores all fields named 'id' across all classes)
field.ignore=id

# By qualified field name (ignores only 'id' field in specific class)
field.ignore=com.xxx.Xxxx#id
```

### 6. Offer Advanced Options for Complex Requirements
- Suggest Groovy scripts for requirements that can't be solved by simple rules
- Provide sample code with explanations

## Example Dialogue

**User**: "How can I ignore specific fields from appearing in my API documentation?"

**AI Response**:
"I can help you configure field ignoring in EasyYapi. 

First, are you using any frameworks like Jackson, Gson, or Spring in your project? This could help us leverage existing annotations.

### If using Jackson:
```properties
# Leverage existing Jackson annotations
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore
```

### If not using any framework:
```properties
# Simple JavaDoc tag approach
field.ignore=#ignore
```

### Example usage with JavaDoc tags:
```java
public class User {
    private String username;
    
    /**
     * @ignore
     */
    private String password;
    
    // Other fields and methods
}
```

This configuration will prevent the password field from appearing in your API documentation while keeping the implementation simple with just JavaDoc comments.

Would you like to know about more advanced configurations for field ignoring?"

---

## Rule Reference

### API Rules

#### api.name
- **Rule Key**: `api.name`
- **Purpose**: Sets the API name for documentation
- **Context**: Method level, Class level
- **Return Type**: String

#### api.tag
- **Rule Key**: `api.tag`
- **Purpose**: Marks interface tags
- **Context**: Method level
- **Return Type**: String

#### api.open
- **Rule Key**: `api.open`
- **Purpose**: Marks whether the interface is public
- **Context**: Method level
- **Return Type**: Boolean

#### api.status
- **Rule Key**: `api.status`
- **Purpose**: Marks interface status (should return done/undone)
- **Context**: Method level
- **Return Type**: String (must be either "done" or "undone")

### Class Rules

#### class.doc
- **Rule Key**: `class.doc`
- **Purpose**: Additional comments on the class
- **Context**: Class level
- **Return Type**: String

#### class.is.ctrl
- **Rule Key**: `class.is.ctrl`
- **Purpose**: Allows exporting APIs from specified classes
- **Context**: Method level
- **Return Type**: Boolean

#### class.prefix.path
- **Rule Key**: `class.prefix.path`
- **Purpose**: Sets API request prefix
- **Context**: Class level
- **Return Type**: String

### Field Rules

#### field.doc
- **Rule Key**: `field.doc`
- **Purpose**: Additional documentation for fields
- **Context**: Field level
- **Return Type**: String

#### field.ignore
- **Rule Key**: `field.ignore`
- **Purpose**: Ignores fields (prevents them from appearing in JSON or being required in requests)
- **Context**: Field level
- **Return Type**: Boolean

#### field.mock
- **Rule Key**: `field.mock`
- **Purpose**: Sets mock data for fields
- **Context**: Field level
- **Return Type**: String

#### field.name
- **Rule Key**: `field.name`
- **Purpose**: Sets field name
- **Context**: Field level
- **Return Type**: String

#### field.required
- **Rule Key**: `field.required`
- **Purpose**: Marks field as required
- **Context**: Field level
- **Return Type**: Boolean

#### field.advanced
- **Rule Key**: `field.advanced`
- **Purpose**: Advanced field configuration
- **Context**: Field level
- **Return Type**: String

#### field.default.value
- **Rule Key**: `field.default.value`
- **Purpose**: Sets default value for fields
- **Context**: Field level
- **Return Type**: String

#### field.demo
- **Rule Key**: `field.demo`
- **Purpose**: Sets demo value for fields
- **Context**: Field level
- **Return Type**: String

#### field.order
- **Rule Key**: `field.order`
- **Purpose**: Sets field order in documentation
- **Context**: Field level
- **Return Type**: Integer

#### field.order.with
- **Rule Key**: `field.order.with`
- **Purpose**: Sets field order with specific grouping
- **Context**: Field level
- **Return Type**: Integer

#### field.type
- **Rule Key**: `field.type`
- **Purpose**: Sets field type in documentation
- **Context**: Field level
- **Return Type**: String

### Method Rules

#### method.doc
- **Rule Key**: `method.doc`
- **Purpose**: Additional documentation for methods
- **Context**: Method level
- **Return Type**: String

#### method.content.type
- **Rule Key**: `method.content.type`
- **Purpose**: Sets content type for methods
- **Context**: Method level
- **Return Type**: String

#### method.default.http.method
- **Rule Key**: `method.default.http.method`
- **Purpose**: Sets default HTTP method
- **Context**: Method level
- **Return Type**: String (HTTP method name: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD)

#### method.additional.header
- **Rule Key**: `method.additional.header`
- **Purpose**: Adds additional headers to the request
- **Context**: Method level
- **Return Type**: String (JSON format: `{name: "header name", value: "", desc: "", required: false, demo: ""}`)

#### method.additional.param
- **Rule Key**: `method.additional.param`
- **Purpose**: Adds additional parameters to the request
- **Context**: Method level
- **Return Type**: String (JSON format: `{name: "param name", value: "", desc: "", required: false, demo: ""}`)

#### method.return
- **Rule Key**: `method.return`
- **Purpose**: Sets return type for methods
- **Context**: Method level
- **Return Type**: String

#### method.return.main
- **Rule Key**: `method.return.main`
- **Purpose**: Sets main return type for methods
- **Context**: Method level
- **Return Type**: String

### Parameter Rules

#### param.default.value
- **Rule Key**: `param.default.value`
- **Purpose**: Sets default value for parameters
- **Context**: Parameter level
- **Return Type**: String

#### param.demo
- **Rule Key**: `param.demo`
- **Purpose**: Sets demo value for parameters
- **Context**: Parameter level
- **Return Type**: String

#### param.doc
- **Rule Key**: `param.doc`
- **Purpose**: Additional documentation for parameters
- **Context**: Parameter level
- **Return Type**: String

#### param.http.type
- **Rule Key**: `param.http.type`
- **Purpose**: Sets HTTP type for parameters
- **Context**: Parameter level
- **Return Type**: String

#### param.ignore
- **Rule Key**: `param.ignore`
- **Purpose**: Ignores parameters in documentation
- **Context**: Parameter level
- **Return Type**: Boolean

#### param.required
- **Rule Key**: `param.required`
- **Purpose**: Marks parameters as required
- **Context**: Parameter level
- **Return Type**: Boolean

### JSON Rules

#### json.rule.convert
- **Rule Key**: `json.rule.convert`
- **Purpose**: Sets JSON conversion rules
- **Context**: Global
- **Return Type**: String

#### json.rule.enum.convert
- **Rule Key**: `json.rule.enum.convert`
- **Purpose**: Sets enum conversion rules for how enum types should be converted in JSON. This rule has lower priority than `json.rule.convert`.
- **Context**: Global
- **Return Type**: String (Format: `~#fieldName` where fieldName is the enum field to use for conversion)

#### json.rule.field.ignore
- **Rule Key**: `json.rule.field.ignore`
- **Purpose**: Ignores fields in JSON output (deprecated, use field.ignore instead)
- **Context**: Field level
- **Return Type**: Boolean

#### json.rule.field.name
- **Rule Key**: `json.rule.field.name`
- **Purpose**: Sets field name for JSON output
- **Context**: Field level
- **Return Type**: String

### Enum Rules

#### enum.use.by.type
- **Rule Key**: `enum.use.by.type`
- **Purpose**: Automatically uses fields of the same type when a field references an enum
- **Context**: Global
- **Return Type**: Boolean

#### enum.use.custom
- **Rule Key**: `enum.use.custom`
- **Purpose**: Customizes which field to use from enum types
- **Context**: Global
- **Return Type**: String (name of the field from enum types to use for JSON conversion)

#### enum.use.name
- **Rule Key**: `enum.use.name`
- **Purpose**: Uses enum name value in JSON
- **Context**: Global
- **Return Type**: Boolean

#### enum.use.ordinal
- **Rule Key**: `enum.use.ordinal`
- **Purpose**: Uses enum ordinal value in JSON
- **Context**: Global
- **Return Type**: Boolean

### Path Rules

#### path.multi
- **Rule Key**: `path.multi`
- **Purpose**: Sets multiple path handling
- **Context**: Global
- **Return Type**: String

### Module Rules

#### module
- **Rule Key**: `module`
- **Purpose**: Sets module configuration
- **Context**: Global
- **Return Type**: String

### Documentation Rules

#### folder.name
- **Rule Key**: `folder.name`
- **Purpose**: Sets folder name for documentation
- **Context**: Global
- **Return Type**: String

#### ignore
- **Rule Key**: `ignore`
- **Purpose**: Sets global ignore rules
- **Context**: Global
- **Return Type**: Boolean

#### mdoc.class.filter
- **Rule Key**: `mdoc.class.filter`
- **Purpose**: Sets class filtering rules for documentation
- **Context**: Global
- **Return Type**: Boolean

#### mdoc.method.path
- **Rule Key**: `mdoc.method.path`
- **Purpose**: Sets method path rules for documentation
- **Context**: Global
- **Return Type**: String

#### mdoc.method.http.method
- **Rule Key**: `mdoc.method.http.method`
- **Purpose**: Sets HTTP method rules for documentation
- **Context**: Global
- **Return Type**: String

### Constant Field Rules

#### constant.field.ignore
- **Rule Key**: `constant.field.ignore`
- **Purpose**: Ignores constant fields in enumeration extraction
- **Context**: Field level
- **Return Type**: Boolean

### HTTP Callback Rules

#### http.call.before
- **Rule Key**: `http.call.before`
- **Purpose**: Callback before every HTTP request made by the plugin
- **Context**: None
- **Return Type**: Void
- **Additional Context**: request

#### http.call.after
- **Rule Key**: `http.call.after`
- **Purpose**: Callback after every HTTP request made by the plugin
- **Context**: None
- **Return Type**: Void
- **Additional Context**: request, response

### Export Rules

#### export.after
- **Rule Key**: `export.after`
- **Purpose**: Callback after each API is exported
- **Context**: Method level
- **Return Type**: Void
- **Additional Context**: api

### Postman Rules

#### postman.host
- **Rule Key**: `postman.host`
- **Purpose**: Sets the host for Postman collection
- **Context**: Global
- **Return Type**: String

#### postman.prerequest
- **Rule Key**: `postman.prerequest`
- **Purpose**: Sets pre-request script for Postman API requests
- **Context**: Method level
- **Return Type**: String

#### class.postman.prerequest
- **Rule Key**: `class.postman.prerequest`
- **Purpose**: Sets pre-request script for Postman folders
- **Context**: Class level
- **Return Type**: String

#### collection.postman.prerequest
- **Rule Key**: `collection.postman.prerequest`
- **Purpose**: Sets pre-request script for Postman collection
- **Context**: None
- **Return Type**: String

#### postman.test
- **Rule Key**: `postman.test`
- **Purpose**: Sets test script for Postman API requests
- **Context**: Method level
- **Return Type**: String

#### class.postman.test
- **Rule Key**: `class.postman.test`
- **Purpose**: Sets test script for Postman folders
- **Context**: Class level
- **Return Type**: String

#### collection.postman.test
- **Rule Key**: `collection.postman.test`
- **Purpose**: Sets test script for Postman collection
- **Context**: None
- **Return Type**: String

### Simple Configurations

#### yapi.server
- **Rule Key**: `yapi.server`
- **Purpose**: Sets YApi server address
- **Context**: Global
- **Return Type**: String

#### yapi.token.$module
- **Rule Key**: `yapi.token.$module`
- **Purpose**: Sets YApi module token
- **Context**: Global
- **Return Type**: String

#### dev
- **Rule Key**: `dev`
- **Purpose**: Enables development mode with detailed logging
- **Context**: Global
- **Return Type**: Boolean

#### max.deep
- **Rule Key**: `max.deep`
- **Purpose**: Sets maximum depth for JSON parsing
- **Context**: Global
- **Return Type**: Integer

#### max.elements
- **Rule Key**: `max.elements`
- **Purpose**: Sets maximum number of fields for JSON parsing
- **Context**: Global
- **Return Type**: Integer 