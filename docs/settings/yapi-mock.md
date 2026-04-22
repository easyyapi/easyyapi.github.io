# YApi Mock

EasyYapi supports syncing field mock rules to the YApi Mock service for frontend development.

## Configuration

### Enable Mock

Add mock rules in your config file:

```properties
field.mock=@mock
```

### Mock Rules

Use the `@mock` tag in Javadoc:

```java
public class User {
    /**
     * Username
     * @mock admin
     */
    private String name;

    /**
     * Email
     * @mock user@example.com
     */
    private String email;

    /**
     * Age
     * @mock 25
     */
    private Integer age;
}
```

## Built-in Mock Rules

EasyYapi provides built-in mock rules based on field names and types. These rules are automatically applied when exporting to YApi.

### Contact & Identity

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.email` | `@email` | Random email |
| `*.phone` | `@phone` | Random phone |
| `*.mobile` | `@phone` | Random phone |
| `*.uuid` | `@uuid` | Random UUID |

### ID Fields

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.id` (integer) | `@integer` | Random integer |
| `*.id` (long) | `@integer` | Random integer |
| `*.id` (string) | `@id` | Random ID string |

### Name & Personal

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.name` | `@string` | Random string |
| `*.age` (integer) | `@integer(0, 120)` | Age between 0-120 |

### Location

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.address` | `@county(true)` | Full address |
| `*.city` | `@city` | Random city |
| `*.country` | `@county` | Random county |
| `*.province` | `@province` | Random province |
| `*.zip` | `@zip` | Random zip code |
| `*.ip` | `@ip` | Random IP address |

### URL & Media

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.url` | `@url` | Random URL |
| `*.link` | `@url` | Random URL |
| `*.image` | `@image` | Random image URL |
| `*.avatar` | `@image` | Random image URL |

### Numbers & Money

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.price` (double/float) | `@float(0, 10000, 2, 2)` | Price with 2 decimals |
| `*.amount` (double/float) | `@float(0, 10000, 2, 2)` | Amount with 2 decimals |
| `*.count` (integer) | `@integer(0, 100)` | Count 0-100 |
| `*.page` (integer) | `@integer(1, 100)` | Page number 1-100 |
| `*.size` (integer) | `@integer(1, 100)` | Page size 1-100 |

### Security

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.password` | `******` | Masked password |
| `*.token` | `@string(32)` | 32-char token |

### Date & Time

| Field Pattern | Mock Value | Description |
|---------------|------------|-------------|
| `*.date` | `@date` | Random date |
| `*.datetime` | `@datetime` | Random datetime |

## Additional Mock Heuristics

Besides the built-in rules, EasyYapi also applies intelligent heuristics based on field names:

| Name Contains | Mock Value | Description |
|---------------|------------|-------------|
| `tel`, `mobile` | `@phone` | Phone number |
| `website` | `@url` | Website URL |
| `guid` | `@uuid` | UUID/GUID |
| `user`, `first`, `last` (with name) | `@cname` | Chinese name |
| `state` | `@province` | Province/State |
| `postal` | `@zip` | Postal code |
| `birth` (with date) | `@date('yyyy-MM-dd')` | Birth date |
| `money` | `@float(0, 10000, 2, 2)` | Money amount |
| `num`, `number`, `qty`, `quantity` | `@integer(0, 100)` | Number |
| `pwd` | `******` | Masked password |
| `key` | `@string(32)` | API key |
| `img`, `photo` | `@image` | Image URL |
| `desc`, `description`, `content`, `remark`, `comment` | `@cparagraph` | Chinese paragraph |
| `title` | `@ctitle` | Chinese title |
| `code` | `@string(6)` | 6-char code |

## Type-based Mock

When no name-based rule matches, EasyYapi falls back to type-based mock:

| Type | Mock Value | Description |
|------|------------|-------------|
| String | `@string` | Random string |
| Short | `@integer(0, 32767)` | Random short |
| Integer | `@integer` | Random integer |
| Long | `@integer` | Random integer |
| Float | `@float` | Random float |
| Double | `@float` | Random float |
| Boolean | `@boolean` | Random boolean |
| Array | `@array` | Random array |
| Object | `@object` | Random object |
| File | `@file` | File placeholder |
| Date | `@date` | Random date |
| DateTime | `@datetime` | Random datetime |

## Custom Mock Rules

You can add custom mock rules in your config file:

```properties
# Pattern: mock.rule=fieldName|type=mockValue
mock.rule=*.orderId|string=@id
mock.rule=*.status|integer=@integer(0, 5)
```

The pattern format is:
- `fieldName` - Field name pattern (supports `*` wildcard)
- `type` - JSON type (string, integer, long, double, float, boolean, etc.)
- `mockValue` - Mock.js expression
