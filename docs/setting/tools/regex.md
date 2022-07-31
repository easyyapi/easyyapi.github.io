# `regex`是提供的正则工具

---

### getGroup0

<a id=getGroup0> </a>

**Desc：**

<p>return the group 0 value($0) if matched
otherwise null if not matched</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### getGroup1

<a id=getGroup1> </a>

**Desc：**

<p>return the group 1 value($1) if matched
otherwise null if not matched</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### get

<a id=get> </a>

**Desc：**

<p>return the special group value if matched
otherwise null if not matched</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |
| groupIndex | integer |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### getAllGroups

<a id=getAllGroups> </a>

**Desc：**

<p>return all group value as List if matched
otherwise null if not matched</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| pattern | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array |  |
|  | string |  |


---
### extract

<a id=extract> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |
| template | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### delFirst

<a id=delFirst> </a>

**Desc：**

<p>Remove the first subString of the input String that matches the
pattern with the given replacement string.</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| pattern | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### delAll

<a id=delAll> </a>

**Desc：**

<p>Remove the first subString of the input String that matches the
pattern</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### delBefore

<a id=delBefore> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### findAllGroup0

<a id=findAllGroup0> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array |  |
|  | string |  |


---
### findAllGroup1

<a id=findAllGroup1> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array |  |
|  | string |  |


---
### findAll

<a id=findAll> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |
| group | integer |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array |  |
|  | string |  |


---
### findAll

<a id=findAll> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| pattern | object |  |
| &ensp;&ensp;&#124;─pattern | string | The original regular-expression pattern string. |
| &ensp;&ensp;&#124;─flags | integer | The original pattern flags. |
| content | string |  |
| group | integer |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | array |  |
|  | string |  |


---
### count

<a id=count> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | integer |  |


---
### contains

<a id=contains> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | object |  |


---
### isMatch

<a id=isMatch> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| regex | string |  |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | object |  |


---
### replaceAll

<a id=replaceAll> </a>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| content | string |  |
| regex | string |  |
| replacementTemplate | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |


---
### escape

<a id=escape> </a>

**Desc：**

<p>escape for Regex keywords</p>


**Params：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
| content | string |  |

**Return：**

| name  |  type  |  desc  |
| ------------ | ------------ | ------------ |
|  | string |  |




