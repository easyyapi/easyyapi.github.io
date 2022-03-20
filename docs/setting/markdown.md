# `Markdown`自定义规则

- 可用于定制化输出的`Markdown`文档格式

---

## 支持的规则

| &nbsp;&nbsp;&nbsp;&nbsp;规则的key | 版本 | 规则描述 |
| ------------ | ------------ | ------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;md.title | v2.3.4+ | 输出标题 |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic | v2.3.4+ | 替换默认的 \[`> Basic`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic.path | v2.3.4+ | 输出API路径 |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic.method | v2.3.4+ | 输出HTTP请求方法 |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic.desc | v2.3.4+ | 输出API描述信息 |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request | v2.3.4+ | 替换默认的 \[`> REQUEST`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.path | v2.3.4+ | 输出API路径参数信息, 替换默认的\[`**Path Params:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.headers | v2.3.4+ | 输出API请求Header, 替换默认的\[`**Headers:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.query | v2.3.4+ | 输出API请求参数, 替换默认的\[`**Query:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.body | v2.3.4+ | 输出API请求Body, 替换默认的\[`**Request Body:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.body.demo | v2.3.4+ | 输出API请求Body示例, 替换默认的\[`**Request Demo:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.form | v2.3.4+ | 输出API请求Form, 替换默认的\[`**Form:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response | v2.3.4+ | 替换默认的 \[`> RESPONSE`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response.headers | v2.3.4+ | 输出API响应Header, 替换默认的\[`**Headers:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response.body | v2.3.4+ | 输出API响应Body, 替换默认的\[`**Body **`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response.body.demo | v2.3.4+ | 输出API响应Body示例, 替换默认的\[`**Response Demo:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.methodDoc.desc | v2.3.4+ | 输出方法描述, 替换默认的\[`**Desc:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.methodDoc.params | v2.3.4+ | 输出方法参数, 替换默认的\[`**Params:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.methodDoc.return | v2.3.4+ | 输出方法响应, 替换默认的\[`**Return:**`] |


## 规则上下文


| 对象 | 版本 | 描述 |
| ------------ | ------------ | ------------ |
| type | v2.3.4+ | "methodDoc"/"request" |
| doc | v2.3.4+ | methodDoc/request |
| deep | v2.3.4+ | 当前markdown层次 |
| title| v2.3.4+ | 当前title |

---

## 通过配置输出为中文markdown文档

``````
# 提供中文markdown文档

# title index
md.title=groovy:```
    //increase index
    def i = session.get(deep+".i")
    i=i==null?1:i+1
    session.set(deep+".i",i)

    //title index
    def t = ""
    for(d in 1..deep){
        if(d>1){
            t += "."
        }
        t += session.get(d+".i")
    }

    return tool.repeat("#",deep) + " " + t + " " + title
```

# for api
md.basic=> 基础信息
md.basic.path=groovy:"**路径:** "+doc.path
md.basic.method=groovy:"**请求方法:** "+doc.method
md.basic.desc=groovy:"**备注:** "+doc.desc
md.request=> 请求参数
md.request.path=**路径参数:**
md.request.headers=**Headers:**
md.request.query=**Query:**
md.request.body=**Body:**
md.request.body.demo=**Body示例:**
md.request.form=**表单:**
md.response=> 返回数据
md.response.headers=**Headers:**
md.response.body=**Body:**
md.response.body.demo=**响应示例:**

# for method doc
md.methodDoc.desc=groovy:"**描述:** "+doc.desc
md.methodDoc.params=**参数:**
md.methodDoc.return=**返回:**
``````

***快速配置***

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/markdown.cn.config
```
或者
```properties
properties.additional=https://gitee.com/tangcent/easy-yapi/raw/master/third/markdown.cn.config
```