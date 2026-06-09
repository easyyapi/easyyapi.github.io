# helper

常用操作辅助方法。提供类查找和链接解析的实用工具。

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `helper.findClass(canonicalText)` | `ClassContext?` | 通过全限定名查找类 |
| `helper.resolveLink(canonicalText)` | `ElementContext?` | 解析单个链接引用（类、方法或字段） |
| `helper.resolveLinks(canonicalText)` | `List<ElementContext>` | 解析所有链接引用 |

## 示例

### 通过名称查找类

````properties
method.return=groovy:```
def cls = helper.findClass("com.example.Result")
return cls ? cls.name() : it.returnType().name()
```
````

### 解析链接引用

````properties
method.return=groovy:```
def linked = helper.resolveLink("com.example.User")
return linked ? linked.name() : null
```
````

## 注意事项

- `helper` 工具提供类查找和链接解析的便捷方法
- 将 `helper` 与 `it.type()` / `it.returnType()` 结合使用进行类型相关操作

## 相关链接

- [it](./it) - 当前上下文对象（包括类型方法）
- [tool](./tool) - 通用工具方法
- [logger](./logger) - 日志工具
