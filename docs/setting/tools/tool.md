# `tool`是提供的主工具类

---

### newSet

<a id=newSet> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| items | array |  |
| &ensp;&ensp;&#124;─ | object |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array |  |
|  | object |  |


---
### newList

<a id=newList> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| items | array |  |
| &ensp;&ensp;&#124;─ | object |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array |  |
|  | object |  |


---
### newMap

<a id=newMap> </a>


**Params：**

Non-Parameter

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| {} | object |  |


---
### parseJson

<a id=parseJson> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| json | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |


---
### toJson

<a id=toJson> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| obj | object |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### prettyJson

<a id=prettyJson> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| obj | object |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### headLine

<a id=headLine> </a>

**Desc：**

<p><p>find the first line in a string</p>

<pre>
tool.headLine(null)  = null
tool.headLine("")    = null
tool.headLine("cat") = "cat"
tool.headLine("cat\r\n") = "cat"
tool.headLine("cat\r\ntest") = "cat"
tool.headLine("cat\ntest") = "cat"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the headLine String, {@code null} if null String input |


---
### capitalize

<a id=capitalize> </a>

**Desc：**

<p><p>Capitalizes a String changing the first character to title case as
per  Character#toTitleCase(int). No other characters are changed.</p>

<p>For a word based algorithm, see  org.apache.commons.lang3.text.WordUtils#capitalize(String).
A {@code null} input String returns {@code null}.</p>

<pre>
tool.capitalize(null)  = null
tool.capitalize("")    = ""
tool.capitalize("cat") = "Cat"
tool.capitalize("cAt") = "CAt"
tool.capitalize("'cat'") = "'cat'"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the capitalized String, {@code null} if null String input |


---
### uncapitalize

<a id=uncapitalize> </a>

**Desc：**

<p><p>Uncapitalizes a String, changing the first character to lower case as
per  Character#toLowerCase(int). No other characters are changed.</p>

<p>For a word based algorithm, see  org.apache.commons.lang3.text.WordUtils#uncapitalize(String).
A {@code null} input String returns {@code null}.</p>

<pre>
tool.uncapitalize(null)  = null
tool.uncapitalize("")    = ""
tool.uncapitalize("cat") = "cat"
tool.uncapitalize("Cat") = "cat"
tool.uncapitalize("CAT") = "cAT"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the uncapitalized String, {@code null} if null String input |


---
### swapCase

<a id=swapCase> </a>

**Desc：**

<p><p>Swaps the case of a String changing upper and title case to
lower case, and lower case to upper case.</p>

<ul>
<li>Upper case character converts to Lower case</li>
<li>Title case character converts to Lower case</li>
<li>Lower case character converts to Upper case</li>
</ul>

<p>For a word based algorithm, see  org.apache.commons.lang3.text.WordUtils#swapCase(String).
A {@code null} input String returns {@code null}.</p>

<pre>
tool.swapCase(null)                 = null
tool.swapCase("")                   = ""
tool.swapCase("The dog has a BONE") = "tHE DOG HAS A bone"
</pre>

<p>NOTE: This method changed in Lang version 2.0.
It no longer performs a word based algorithm.
If you only use ASCII, you will notice no change.
That functionality is available in org.apache.commons.lang3.text.WordUtils.</p>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the changed String, {@code null} if null String input |


---
### upperCase

<a id=upperCase> </a>

**Desc：**

<p><p>Converts a String to upper case as per  String#toUpperCase().</p>

<p>A {@code null} input String returns {@code null}.</p>

<pre>
tool.upperCase(null)  = null
tool.upperCase("")    = ""
tool.upperCase("aBc") = "ABC"
</pre>

<p><strong>Note:</strong> As described in the documentation for  String#toUpperCase(),
the result of this method is affected by the current locale.
For platform-independent case transformations, the method  #lowerCase(String, Locale)
should be used with a specific locale (e.g.  Locale#ENGLISH).</p>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the upper cased String, {@code null} if null String input |


---
### lowerCase

<a id=lowerCase> </a>

**Desc：**

<p><p>Converts a String to lower case as per  String#toLowerCase().</p>

<p>A {@code null} input String returns {@code null}.</p>

<pre>
tool.lowerCase(null)  = null
tool.lowerCase("")    = ""
tool.lowerCase("aBc") = "abc"
</pre>

<p><strong>Note:</strong> As described in the documentation for  String#toLowerCase(),
the result of this method is affected by the current locale.
For platform-independent case transformations, the method  #lowerCase(String, Locale)
should be used with a specific locale (e.g.  Locale#ENGLISH).</p>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the lower cased String, {@code null} if null String input |


---
### reverse

<a id=reverse> </a>

**Desc：**

<p><p>Reverses a String as per  StringBuilder#reverse().</p>

<p>A {@code null} String returns {@code null}.</p>

<pre>
tool.reverse(null)  = null
tool.reverse("")    = ""
tool.reverse("bat") = "tab"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | the reversed String, {@code null} if null String input |


---
### repeat

<a id=repeat> </a>

**Desc：**

<p><p>Repeat a String {@code repeat} times to form a
new String.</p>

<pre>
tool.repeat(null, 2) = null
tool.repeat("", 0)   = ""
tool.repeat("", 2)   = ""
tool.repeat("a", 3)  = "aaa"
tool.repeat("ab", 2) = "abab"
tool.repeat("a", -2) = ""
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| repeat | integer |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | a new String consisting of the original String repeated,<br>{@code null} if null String input |


---
### repeat

<a id=repeat> </a>

**Desc：**

<p><p>Repeat a String {@code repeat} times to form a
new String, with a String separator injected each time. </p>

<pre>
tool.repeat(null, null, 2) = null
tool.repeat(null, "x", 2)  = null
tool.repeat("", null, 0)   = ""
tool.repeat("", "", 2)     = ""
tool.repeat("", "x", 3)    = "xxx"
tool.repeat("?", ", ", 3)  = "?, ?, ?"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| separator | string |  |
| repeat | integer |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | a new String consisting of the original String repeated,<br>{@code null} if null String input |


---
### isNumeric

<a id=isNumeric> </a>

**Desc：**

<p><p>Checks if the CharSequence contains only Unicode digits.
A decimal point is not a Unicode digit and returns false.</p>

<p>{@code null} will return {@code false}.
An empty CharSequence (length()=0) will return {@code false}.</p>

<p>Note that the method does not allow for a leading sign, either positive or negative.
Also, if a String passes the numeric test, it may still generate a NumberFormatException
when parsed by Integer.parseInt or Long.parseLong, e.g. if the value is outside the range
for int or long respectively.</p>

<pre>
tool.isNumeric(null)   = false
tool.isNumeric("")     = false
tool.isNumeric("  ")   = false
tool.isNumeric("123")  = true
tool.isNumeric("\u0967\u0968\u0969")  = true
tool.isNumeric("12 3") = false
tool.isNumeric("ab2c") = false
tool.isNumeric("12-3") = false
tool.isNumeric("12.3") = false
tool.isNumeric("-123") = false
tool.isNumeric("+123") = false
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | object | {@code true} if only contains digits, and is non-null |


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
### toCamelCase

<a id=toCamelCase> </a>

**Desc：**

<p><p>Converts all the delimiter separated words in a String into camelCase,
that is each word is made up of a titlecase character and then a series of
lowercase characters.</p>

<p>The delimiters represent a set of characters understood to separate words.
The first non-delimiter character after a delimiter will be capitalized. The first String
character may or may not be capitalized and it's determined by the user input for capitalizeFirstLetter
variable.</p>

<p>A <code>null</code> input String returns <code>null</code>.
Capitalization uses the Unicode title case, normally equivalent to
upper case and cannot perform locale-sensitive mappings.</p>

<pre>
tool.toCamelCase(null, false)                                 = null
tool.toCamelCase("", false, *)                                = ""
tool.toCamelCase(*, false, null)                              = *
tool.toCamelCase(*, true, new char0)                        = *
tool.toCamelCase("To.Camel.Case", false, new char{'.'})     = "toCamelCase"
tool.toCamelCase(" to @ Camel case", true, new char{'@'})   = "ToCamelCase"
tool.toCamelCase(" @to @ Camel case", false, new char{'@'}) = "toCamelCase"
</pre>

</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| str | string |  |
| capitalizeFirstLetter | object |  |
| delimiters | array |  |
| &ensp;&ensp;&#124;─ | object |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string | camelCase of String, <code>null</code> if null String input |


---
### now

<a id=now> </a>

**Desc：**

<p>current time as "yyyy-MM-dd HH:mm:ss"</p>


**Params：**

Non-Parameter

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### now

<a id=now> </a>

**Desc：**

<p>current time as the special pattern</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| pattern | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### today

<a id=today> </a>

**Desc：**

<p>current time as "yyyy-MM-dd"</p>


**Params：**

Non-Parameter

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### format

<a id=format> </a>

**Desc：**

<p>format the time as the special pattern</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| time | integer |  |
| pattern | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### debug

<a id=debug> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| any | object |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |




