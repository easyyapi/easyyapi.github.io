# Field Order Extensions

EasyYapi provides several extensions for controlling field order in API documentation.

## Available Extensions

### Alphabetical (A-Z)

Fields ordered alphabetically in ascending order:

```properties
# Extension: field-order-alphabetically (disabled by default)
field.order.with=groovy:'''
    return a.name().compareTo(b.name())
'''
```

### Alphabetical Descending (Z-A)

Fields ordered alphabetically in descending order:

```properties
# Extension: field-order-alphabetically-desc (disabled by default)
field.order.with=groovy:'''
    return -a.name().compareTo(b.name())
'''
```

### Parent Fields First

Parent class fields appear before child class fields:

```properties
# Extension: field-order-parent-first (disabled by default)
field.order.with=groovy:'''
    def aDefineClass = a.defineClass()
    def bDefineClass = b.defineClass()
    if(aDefineClass == bDefineClass){
        return 0
    }else if(aDefineClass.isExtend(bDefineClass.name())){
        return 1
    }else{
        return -1
    }
'''
```

### Child Fields First

Child class fields appear before parent class fields:

```properties
# Extension: field-order-child-first (disabled by default)
field.order.with=groovy:'''
    def aDefineClass = a.defineClass()
    def bDefineClass = b.defineClass()
    if(aDefineClass == bDefineClass){
        return 0
    }else if(aDefineClass.isExtend(bDefineClass.name())){
        return -1
    }else{
        return 1
    }
'''
```

## Enabling Extensions

All field order extensions are **disabled by default**. Enable the desired one in IDE settings:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

::: warning
Only one field order extension should be enabled at a time. Enabling multiple may produce unpredictable results.
:::

## See Also

- [field.order](/settings/rules/field_order) — Set field order by index
- [field.order.with](/settings/rules/field_order_with) — Set field order by comparator
