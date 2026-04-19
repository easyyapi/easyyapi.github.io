# field.order.with

Set field ordering strategy.

## Usage

```properties
field.order.with=groovy:it.type().fields().sort{ a,b -> a.order() <=> b.order() }
```
