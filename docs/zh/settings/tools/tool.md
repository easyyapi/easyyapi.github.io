# tool

通用工具方法，用于字符串操作、集合、JSON 操作等。此工具提供了 Groovy 脚本中常用的各种辅助函数。

## 用法

```properties
field.name=groovy:'''
def name = tool.capitalize(it.name())
return tool.removePrefix(name, "get")
'''
```

## 字符串方法

### 基本字符串操作

| 方法 | 说明 |
|--------|-------------|
| `tool.nullOrEmpty(str)` | 检查字符串是否为 null 或空 |
| `tool.nullOrBlank(str)` | 检查字符串是否为 null 或空白 |
| `tool.notNullOrEmpty(str)` | 检查字符串是否不为 null 且不为空 |
| `tool.notNullOrBlank(str)` | 检查字符串是否不为 null 且不为空白 |
| `tool.headLine(str)` | 获取文本的第一行（别名：`firstLine`） |
| `tool.capitalize(str)` | 首字母大写 |
| `tool.uncapitalize(str)` | 首字母小写 |
| `tool.upperCase(str)` | 转换为大写 |
| `tool.lowerCase(str)` | 转换为小写 |
| `tool.swapCase(str)` | 交换所有字符的大小写 |
| `tool.reverse(str)` | 反转字符串 |
| `tool.repeat(str, n)` | 重复字符串 n 次 |
| `tool.repeat(str, separator, n)` | 使用分隔符重复字符串 n 次 |
| `tool.isNumeric(str)` | 检查字符串是否只包含数字 |
| `tool.isAlpha(str)` | 检查字符串是否只包含字母 |

### 子字符串操作

| 方法 | 说明 |
|--------|-------------|
| `tool.substringBefore(str, sep)` | 获取分隔符前的子字符串 |
| `tool.substringAfter(str, sep)` | 获取分隔符后的子字符串 |
| `tool.substringBeforeLast(str, sep)` | 获取最后一个分隔符前的子字符串 |
| `tool.substringAfterLast(str, sep)` | 获取最后一个分隔符后的子字符串 |
| `tool.substringBetween(str, tag)` | 获取匹配标签之间的子字符串 |
| `tool.substringBetween(str, open, close)` | 获取 open 和 close 之间的子字符串 |
| `tool.substringsBetween(str, open, close)` | 获取标记之间的所有子字符串 |
| `tool.removePrefix(str, prefix)` | 移除字符串前缀 |
| `tool.removeSuffix(str, suffix)` | 移除字符串后缀 |

### 分割和连接

| 方法 | 说明 |
|--------|-------------|
| `tool.split(str)` | 按空白分割字符串 |
| `tool.split(str, separators)` | 按分隔符字符分割字符串 |

### 大小写转换

| 方法 | 说明 |
|--------|-------------|
| `tool.toCamelCase(str, capitalizeFirst)` | 转换为驼峰命名或帕斯卡命名 |
| `tool.camel2Underline(str)` | 将驼峰命名转换为下划线命名 |

## 集合方法

| 方法 | 说明 |
|--------|-------------|
| `tool.newSet(vararg items)` | 创建新的 Set |
| `tool.newList(vararg items)` | 创建新的 List |
| `tool.newMap()` | 创建新的 LinkedHashMap |
| `tool.asList(any)` | 转换为 List |
| `tool.asArray(any)` | 转换为 Array |

## Any 方法

| 方法 | 说明 |
|--------|-------------|
| `tool.isNullOrEmpty(any)` | 检查值是否为 null 或空（适用于 String、Collection、Map、Array） |
| `tool.notNullOrEmpty(any)` | 检查值是否不为 null 且不为空 |
| `tool.intersect(any, other)` | 获取两个集合的交集 |
| `tool.anyIntersect(any, other)` | 检查集合是否有公共元素 |
| `tool.equalOrIntersect(any, other)` | 检查是否相等或有公共元素 |

## JSON 方法

| 方法 | 说明 |
|--------|-------------|
| `tool.parseJson(json)` | 将 JSON 字符串解析为对象 |
| `tool.toJson(obj)` | 将对象转换为 JSON 字符串 |
| `tool.prettyJson(obj)` | 将对象转换为格式化的 JSON 字符串 |

## 日期/时间方法

| 方法 | 说明 |
|--------|-------------|
| `tool.now()` | 获取当前日期时间字符串（yyyy-MM-dd HH:mm:ss） |
| `tool.now(pattern)` | 使用自定义格式获取当前日期时间 |
| `tool.today()` | 获取当前日期字符串（yyyy-MM-dd） |
| `tool.format(time, pattern)` | 使用格式化模式格式化时间戳 |

## 剪贴板方法

| 方法 | 说明 |
|--------|-------------|
| `tool.copy2Clipboard(str)` | 复制字符串到系统剪贴板 |

## 调试方法

| 方法 | 说明 |
|--------|-------------|
| `tool.debug(any)` | 获取对象的调试信息（类型和可用方法） |

## 示例

```properties
field.mock=groovy:'''
def name = it.name()

// 字符串操作
if (tool.notNullOrEmpty(name)) {
    def capitalizedName = tool.capitalize(name)
    def underscoreName = tool.camel2Underline(name)
    logger.info("Original: " + name)
    logger.info("Capitalized: " + capitalizedName)
    logger.info("Snake case: " + underscoreName)
}

// JSON 操作
def data = [name: "test", value: 123]
def json = tool.toJson(data)
logger.info("JSON: " + json)

// 日期/时间
def now = tool.now()
def today = tool.today()
logger.info("Current time: " + now)

return "mock_" + name
'''
```

## 相关链接

- [regex](./regex) - 正则表达式工具
- [logger](./logger) - 日志工具
