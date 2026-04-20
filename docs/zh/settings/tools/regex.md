# regex

正则表达式工具，带模式缓存以提高性能。提供常用的正则表达式操作，无需手动编译模式。

## 用法

```properties
field.name=groovy:'''
def match = regex.find(it.name(), /_(\w)/)
return match ? match[1].toUpperCase() : it.name()
'''
```

## 方法

### 提取

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `regex.getGroup0(regex, content)` | `String?` | 获取完整匹配（组 0） |
| `regex.getGroup1(regex, content)` | `String?` | 获取第一个捕获组 |
| `regex.get(regex, content, groupIndex)` | `String?` | 获取特定捕获组 |
| `regex.getAllGroups(regex, content)` | `List<String>?` | 获取第一次匹配的所有捕获组 |

### 查找所有

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `regex.findAllGroup0(regex, content)` | `List<String>?` | 查找所有完整匹配 |
| `regex.findAllGroup1(regex, content)` | `List<String>?` | 查找所有第一组匹配 |
| `regex.findAll(regex, content, group)` | `List<String>` | 查找特定组的所有匹配 |

### 替换

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `regex.extract(regex, content, template)` | `String?` | 使用模板替换匹配（使用 `$1`、`$2` 表示组） |
| `regex.replaceAll(content, regex, template)` | `String?` | extract 的别名 |
| `regex.delFirst(regex, content)` | `String` | 删除第一个匹配 |
| `regex.delAll(regex, content)` | `String` | 删除所有匹配 |
| `regex.delBefore(regex, content)` | `String?` | 删除第一个匹配之前的所有内容 |

### 测试

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `regex.contains(regex, content)` | `Boolean` | 检查模式是否在任何位置匹配 |
| `regex.isMatch(regex, content)` | `Boolean` | 检查整个内容是否匹配模式 |
| `regex.count(regex, content)` | `Int` | 计算匹配次数 |

### 实用工具

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `regex.escape(content)` | `String?` | 转义特殊正则字符 |

## 示例

### 提取第一个匹配

```properties
field.name=groovy:'''
def name = it.name()
def match = regex.getGroup1("get(\\w+)", name)
return match ? match.uncapitalize() : name
'''
```

### 查找所有匹配

```properties
method.path=groovy:'''
def paths = regex.findAllGroup1("/(\\w+)", it.ann("RequestMapping", "value"))
return "/" + paths.join("/")
'''
```

### 使用组替换

```properties
field.name=groovy:'''
def name = it.name()
return regex.extract("_(\\w)", name, "$1")
'''
```

### 删除模式

```properties
field.name=groovy:'''
def name = it.name()
name = regex.delFirst("^get", name)
name = regex.delAll("_", name)
return name
'''
```

### 计算出现次数

```properties
field.description=groovy:'''
def comment = it.doc()
if (comment) {
    def paramCount = regex.count("@param", comment)
    return "Has " + paramCount + " parameters"
}
return null
'''
```

### 转义用户输入

```properties
field.mock=groovy:'''
def userInput = config.get("mock.pattern")
if (userInput) {
    def escaped = regex.escape(userInput)
    return "Pattern: " + escaped
}
return null
'''
```

### 复杂提取

```properties
method.description=groovy:'''
def doc = it.doc()
if (!doc) return null

def lines = doc.split("\n")
def result = []

lines.each { line ->
    def paramMatch = regex.getGroup1("@param\\s+(\\w+)", line)
    if (paramMatch) {
        result.add("Parameter: " + paramMatch)
    }
    
    def returnMatch = regex.getGroup1("@return\\s+(.+)", line)
    if (returnMatch) {
        result.add("Returns: " + returnMatch)
    }
}

return result.join("\n")
'''
```

## 模式缓存

所有模式都会自动缓存以提高性能。您无需担心重新编译多次使用的模式。

## 特殊字符

以下字符会被 `regex.escape()` 自动转义：

`\ $ ( ) * + . [ ] ? ^ { } |`

## 相关链接

- [tool](./tool) - 包括字符串操作的通用工具方法
- [logger](./logger) - 日志工具
