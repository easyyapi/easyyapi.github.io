# 字段排序扩展

EasyYapi 提供了多个扩展来控制 API 文档中的字段顺序。

## 可用扩展

### 字母升序 (A-Z)

字段按字母升序排列：

```properties
# 扩展：field-order-alphabetically（默认禁用）
field.order.with=groovy:'''
    return a.name().compareTo(b.name())
'''
```

### 字母降序 (Z-A)

字段按字母降序排列：

```properties
# 扩展：field-order-alphabetically-desc（默认禁用）
field.order.with=groovy:'''
    return -a.name().compareTo(b.name())
'''
```

### 父类字段优先

父类字段排在子类字段之前：

```properties
# 扩展：field-order-parent-first（默认禁用）
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

### 子类字段优先

子类字段排在父类字段之前：

```properties
# 扩展：field-order-child-first（默认禁用）
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

## 启用扩展

所有字段排序扩展**默认禁用**。在 IDE 设置中启用所需的扩展：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

::: warning
同一时间只应启用一个字段排序扩展。启用多个可能导致不可预测的结果。
:::

## 另见

- [field.order](/zh/settings/rules/field_order) — 按索引设置字段顺序
- [field.order.with](/zh/settings/rules/field_order_with) — 按比较器设置字段顺序
