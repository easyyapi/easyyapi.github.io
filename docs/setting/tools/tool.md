# `tool`是提供的主工具类

---

# 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| debug(obj) | void | debug对象,获取对象所有可用方法 | tool.debug(tool)| 
| isNullOrEmpty(obj) | Boolean | 判断对象为null或空,支持null、空字符串、空数组、空集合、空Map | tool.isNullOrEmpty(obj)| 
| notNullOrEmpty(obj) | Boolean | 等价于!isNullOrEmpty | tool.notNullOrEmpty(obj)| 
| asArray(obj) | Array | 将对象转换为数组 | tool.asArray(obj)| 
| asList(obj) | List | 将对象转换为集合 | tool.asList(obj)| 
| intersect(any，other) | Array | 取两个对象的交集 | tool.intersect(any，other)| 
| anyIntersect(any，other) | Boolean | 判断两个对象是否有交集 | tool.anyIntersect(any，other)| 
| equalOrIntersect(any，other) | Boolean | 判断两个对象是否相同或有交集,与`anyIntersect`不同的是，对于两个空对象，将返回`true` | tool.equalOrIntersect(any，other)| 
| newSet(items...) | Set | 创建Set对象 | tool.newSet("ele1","ele2")| 
| newList(items...) | List | 创建List对象 | tool.newList("ele1","ele2")| 
| newMap() | Map | 创建Map对象 | tool.newMap()| 
| parseJson(json) | Object | 解析json字符串 | tool.parseJson("{\"key\":\"value\"}")| 
| toJson(obj) | Object | 对象转json字符串 | groovy:tool.toJson([key:"value"])<br/>js:tool.toJson({key:"value"})| 
| prettyJson(obj) | Object | 对象转json字符串(格式化) | groovy:tool.prettyJson([key:"value"])<br/>js:tool.prettyJson({key:"value"})| 
| headLine(str) | string | 获取字符串第一行 | tool.headLine("multi\nline") | 
| capitalize(str) | string | 字符串首字母大写 | tool.capitalize("words") | 
| uncapitalize(str) | string | 字符串首字母小写 | tool.uncapitalize("Words") | 
| swapCase(str) | string | 字符串每个字符大小写转换 | tool.swapCase("WoRdS") | 
| upperCase(str) | string | 字符串全部大写 | tool.upperCase("words") | 
| lowerCase(str) | string | 字符串全部小写 | tool.lowerCase("words") | 
| reverse(str) | string | 字符串反转 | tool.reverse("sdrow") | 
| repeat(str,repeat) | string | 重复指定字符串 | tool.repeat("x",10) | 
| isNumeric(str) | string | 判断字符串是纯数字 | tool.isNumeric("123") | 
| toCamelCase(str) | string | 字符串转驼峰式 | tool.toCamelCase("some words",true) | 
| now() | string | 获取当前时间 格式为:yyyy-MM-dd HH:mm:ss | tool.now() | 
| now(pattern) | string | 获取当前时间并指定格式  | tool.now("yyyy-MM-dd") | 
| today() | string | 获取当前时间 格式为:yyyy-MM-dd  | tool.today() | 
| format() | string | 格视化时间戳  | tool.format(1000000000000,"yyyy-MM-dd HH:mm:ss") | 

---

# 其他一些方法

---

### isAlpha

<a id=isAlpha> </a>

**Desc：**

<p><p>Checks if the CharSequence contains only Unicode letters.</p>

<p>{@code null} will return {@code false}.
An empty CharSequence (length()=0) will return {@code false}.</p>

<pre>
tool.isAlpha(null)   = false
tool.isAlpha("")     = false
tool.isAlpha("  ")   = false
tool.isAlpha("abc")  = true
tool.isAlpha("ab2c") = false
tool.isAlpha("ab-c") = false
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | object | {@code true} if only contains letters, and is non-null |


---
### substringBefore

<a id=substringBefore> </a>

**Desc：**

<p><p>Gets the substring before the first occurrence of a separator.
The separator is not returned.</p>

<p>A {@code null} string input will return {@code null}.
An empty ("") string input will return the empty string.
A {@code null} separator will return the input string.</p>

<p>If nothing is found, the string input is returned.</p>

<pre>
tool.substringBefore(null, *)      = null
tool.substringBefore("", *)        = ""
tool.substringBefore("abc", "a")   = ""
tool.substringBefore("abcba", "b") = "a"
tool.substringBefore("abc", "c")   = "ab"
tool.substringBefore("abc", "d")   = "abc"
tool.substringBefore("abc", "")    = ""
tool.substringBefore("abc", null)  = "abc"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| separator | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the substring before the first occurrence of the separator,<br>{@code null} if null String input |


---
### substringAfter

<a id=substringAfter> </a>

**Desc：**

<p><p>Gets the substring after the first occurrence of a separator.
The separator is not returned.</p>

<p>A {@code null} string input will return {@code null}.
An empty ("") string input will return the empty string.
A {@code null} separator will return the empty string if the
input string is not {@code null}.</p>

<p>If nothing is found, the empty string is returned.</p>

<pre>
tool.substringAfter(null, *)      = null
tool.substringAfter("", *)        = ""
tool.substringAfter(*, null)      = ""
tool.substringAfter("abc", "a")   = "bc"
tool.substringAfter("abcba", "b") = "cba"
tool.substringAfter("abc", "c")   = ""
tool.substringAfter("abc", "d")   = ""
tool.substringAfter("abc", "")    = "abc"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| separator | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the substring after the first occurrence of the separator,<br>{@code null} if null String input |


---
### substringBeforeLast

<a id=substringBeforeLast> </a>

**Desc：**

<p><p>Gets the substring before the last occurrence of a separator.
The separator is not returned.</p>

<p>A {@code null} string input will return {@code null}.
An empty ("") string input will return the empty string.
An empty or {@code null} separator will return the input string.</p>

<p>If nothing is found, the string input is returned.</p>

<pre>
tool.substringBeforeLast(null, *)      = null
tool.substringBeforeLast("", *)        = ""
tool.substringBeforeLast("abcba", "b") = "abc"
tool.substringBeforeLast("abc", "c")   = "ab"
tool.substringBeforeLast("a", "a")     = ""
tool.substringBeforeLast("a", "z")     = "a"
tool.substringBeforeLast("a", null)    = "a"
tool.substringBeforeLast("a", "")      = "a"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| separator | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the substring before the last occurrence of the separator,<br>{@code null} if null String input |


---
### substringAfterLast

<a id=substringAfterLast> </a>

**Desc：**

<p><p>Gets the substring after the last occurrence of a separator.
The separator is not returned.</p>

<p>A {@code null} string input will return {@code null}.
An empty ("") string input will return the empty string.
An empty or {@code null} separator will return the empty string if
the input string is not {@code null}.</p>

<p>If nothing is found, the empty string is returned.</p>

<pre>
tool.substringAfterLast(null, *)      = null
tool.substringAfterLast("", *)        = ""
tool.substringAfterLast(*, "")        = ""
tool.substringAfterLast(*, null)      = ""
tool.substringAfterLast("abc", "a")   = "bc"
tool.substringAfterLast("abcba", "b") = "a"
tool.substringAfterLast("abc", "c")   = ""
tool.substringAfterLast("a", "a")     = ""
tool.substringAfterLast("a", "z")     = ""
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| separator | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the substring after the last occurrence of the separator,<br>{@code null} if null String input |


---
### substringBetween

<a id=substringBetween> </a>

**Desc：**

<p><p>Gets the String that is nested in between two instances of the
same String.</p>

<p>A {@code null} input String returns {@code null}.
A {@code null} tag returns {@code null}.</p>

<pre>
tool.substringBetween(null, *)            = null
tool.substringBetween("", "")             = ""
tool.substringBetween("", "tag")          = null
tool.substringBetween("tagabctag", null)  = null
tool.substringBetween("tagabctag", "")    = ""
tool.substringBetween("tagabctag", "tag") = "abc"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| tag | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the substring, {@code null} if no match |


---
### substringBetween

<a id=substringBetween> </a>

**Desc：**

<p><p>Gets the String that is nested in between two Strings.
Only the first match is returned.</p>

<p>A {@code null} input String returns {@code null}.
A {@code null} open/close returns {@code null} (no match).
An empty ("") open and close returns an empty string.</p>

<pre>
tool.substringBetween("wxbyz", "", "") = "b"
tool.substringBetween(null, *, *)          = null
tool.substringBetween(*, null, *)          = null
tool.substringBetween(*, *, null)          = null
tool.substringBetween("", "", "")          = ""
tool.substringBetween("", "", "]")         = null
tool.substringBetween("", "", "")        = null
tool.substringBetween("yabcz", "", "")     = ""
tool.substringBetween("yabcz", "y", "z")   = "abc"
tool.substringBetween("yabczyabcz", "y", "z")   = "abc"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| open | string |  |
| close | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the substring, {@code null} if no match |


---
### substringsBetween

<a id=substringsBetween> </a>

**Desc：**

<p><p>Searches a String for substrings delimited by a start and end tag,
returning all matching substrings in an array.</p>

<p>A {@code null} input String returns {@code null}.
A {@code null} open/close returns {@code null} (no match).
An empty ("") open/close returns {@code null} (no match).</p>

<pre>
tool.substringsBetween("abc", "", "") = "a","b","c"
tool.substringsBetween(null, *, *)            = null
tool.substringsBetween(*, null, *)            = null
tool.substringsBetween(*, *, null)            = null
tool.substringsBetween("", "", "")          = 
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| open | string |  |
| close | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array | a String Array of substrings, or {@code null} if no match |
|  | string |  |


---
### split

<a id=split> </a>

**Desc：**

<p><p>Splits the provided text into an array, using whitespace as the
separator.
Whitespace is defined by  Character#isWhitespace(char).</p>

<p>The separator is not included in the returned String array.
Adjacent separators are treated as one separator.
For more control over the split use the StrTokenizer class.</p>

<p>A {@code null} input String returns {@code null}.</p>

<pre>
tool.split(null)       = null
tool.split("")         = 
tool.split("abc def")  = "abc", "def"
tool.split("abc  def") = "abc", "def"
tool.split(" abc ")    = "abc"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array | an array of parsed Strings, {@code null} if null String input |
|  | string |  |


---
### split

<a id=split> </a>

**Desc：**

<p><p>Splits the provided text into an array, separators specified.
This is an alternative to using StringTokenizer.</p>

<p>The separator is not included in the returned String array.
Adjacent separators are treated as one separator.
For more control over the split use the StrTokenizer class.</p>

<p>A {@code null} input String returns {@code null}.
A {@code null} separatorChars splits on whitespace.</p>

<pre>
tool.split(null, *)         = null
tool.split("", *)           = 
tool.split("abc def", null) = "abc", "def"
tool.split("abc def", " ")  = "abc", "def"
tool.split("abc  def", " ") = "abc", "def"
tool.split("ab:cd:ef", ":") = "ab", "cd", "ef"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| separatorChars | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array | an array of parsed Strings, {@code null} if null String input |
|  | string |  |


---
