# it

The current context object. This is the most important tool as it provides access to the element being processed.

## Context Types

The type of `it` depends on the rule context:

| Rule Context | `it` Type |
|--------------|-----------|
| Class rules | ClassInfo |
| Method rules | MethodInfo |
| Field rules | FieldInfo |
| Parameter rules | ParamInfo |

## Common Methods

- `it.name()` — Get the element name
- `it.comment()` — Get the Javadoc/KDoc comment
- `it.doc(tag)` — Get a specific doc tag value
- `it.hasAnn(name)` — Check if an annotation exists
- `it.ann(name)` — Get an annotation
- `it.type()` — Get the element type
