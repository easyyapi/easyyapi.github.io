# `Markdown`自定义规则

> ⚠️ **已废弃**
> 
> 该配置方式已被废弃，推荐使用 [模板配置](/setting/template.md) 来自定义输出的markdown文档格式。
> 模板配置提供了更灵活和强大的自定义能力。

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
| &nbsp;&nbsp;&nbsp;&nbsp;md.bool.true | v2.3.5+ | 表示`是`, 替换默认的\[`YES`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.bool.false | v2.3.5+ | 表示`否`, 替换默认的\[`NO`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.table.${tableId}.${column}.ignore | v2.3.5+ | 是否隐藏指定表格的指定列 |
| &nbsp;&nbsp;&nbsp;&nbsp;md.table.${tableId}.${column}.name | v2.3.5+ | 设置指定表格的指定列的列名 |
| &nbsp;&nbsp;&nbsp;&nbsp;md.table.${tableId}.${column}.align | v2.3.5+ | 设置指定表格的指定列的对齐方式 |


## 可用表格信息

| 表格(tableId) | 列(column) | 版本 | 描述 |
| ------------ | ------------ | ------------ | ------------ |
| request.pathParams | name | v2.3.5+ | 请求路径参数表格中的`名称` |
| request.pathParams | value | v2.3.5+ | 请求路径参数表格中的`值` |
| request.pathParams | desc | v2.3.5+ | 请求路径参数表格中的`描述` |
| request.headers | name | v2.3.5+ | 请求header表格中的`名称` |
| request.headers | value | v2.3.5+ | 请求header表格中的`值` |
| request.headers | required | v2.3.5+ | 请求header表格中的`必须` |
| request.headers | desc | v2.3.5+ | 请求header表格中的`描述` |
| request.querys | name | v2.3.5+ | 请求参数表格中的`名称` |
| request.querys | value | v2.3.5+ | 请求参数表格中的`值` |
| request.querys | required | v2.3.5+ | 请求参数表格中的`必须` |
| request.querys | desc | v2.3.5+ | 请求参数表格中的`描述` |
| request.body | name | v2.3.5+ | 请求Body表格中的`名称` |
| request.body | type | v2.3.5+ | 请求Body表格中的`类型` |
| request.body | required | v2.3.5+ | 请求Body表格中的`必须` |
| request.body | default | v2.3.5+ | 请求Body表格中的`默认值` |
| request.body | desc | v2.3.5+ | 请求Body表格中的`描述` |
| request.form | name | v2.3.5+ | 请求表单表格中的`名称` |
| request.form | value | v2.3.5+ | 请求表单表格中的`值` |
| request.form | required | v2.3.5+ | 请求表单表格中的`必须` |
| request.form | type | v2.3.5+ | 请求表单表格中的`类型` |
| request.form | desc | v2.3.5+ | 请求表单表格中的`描述` |
| response.headers | name | v2.3.5+ | 请求header表格中的`名称` |
| response.headers | value | v2.3.5+ | 请求header表格中的`值` |
| response.headers | required | v2.3.5+ | 请求header表格中的`必须` |
| response.headers | desc | v2.3.5+ | 请求header表格中的`描述` |
| response.body | name | v2.3.5+ | 响应Body表格中的`名称` |
| response.body | type | v2.3.5+ | 响应Body表格中的`类型` |
| response.body | required | v2.3.5+ | 响应Body表格中的`必须` |
| response.body | default | v2.3.5+ | 响应Body表格中的`默认值` |
| response.body | desc | v2.3.5+ | 响应Body表格中的`描述` |
| methodDoc.params | name | v2.3.5+ | 方法文档中的参数表格中的`名称` |
| methodDoc.params | type | v2.3.5+ | 方法文档中的参数表格中的`类型` |
| methodDoc.params | required | v2.3.5+ | 方法文档中的参数表格中的`必须` |
| methodDoc.params | default | v2.3.5+ | 方法文档中的参数表格中的`默认值` |
| methodDoc.params | desc | v2.3.5+ | 方法文档中的参数表格中的`描述` |
| methodDoc.return | name | v2.3.5+ | 方法文档中的返回类型表格中的`名称` |
| methodDoc.return | type | v2.3.5+ | 方法文档中的返回类型表格中的`类型` |
| methodDoc.return | required | v2.3.5+ | 方法文档中的返回类型表格中的`必须` |
| methodDoc.return | default | v2.3.5+ | 方法文档中的返回类型表格中的`默认值` |
| methodDoc.return | desc | v2.3.5+ | 方法文档中的返回类型表格中的`描述` |

## 规则上下文


| 对象 | 版本 | 描述 |
| ------------ | ------------ | ------------ |
| type | v2.3.4+ | `methodDoc`(方法文档) / `request`(即api) |
| doc | v2.3.4+ | 当前`API`或`methodDoc` |
| [api](/setting/tools/api.html) | v2.3.4+ | 当前`API`,仅`type`为`request`时可用 |
| methodDoc | v2.3.4+ | 当前方法文档,仅`type`为`methodDoc`时可用 |
| deep | v2.3.4+ | 当前markdown层次 |
| title | v2.3.4+ | 当前title |

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

# for tables(request)
md.table.request.pathParams.name.name=名称
md.table.request.pathParams.value.name=值
md.table.request.pathParams.desc.name=备注

md.table.request.headers.name.name=名称
md.table.request.headers.value.name=值
md.table.request.headers.desc.name=备注
md.table.request.headers.required.name=必须

md.table.request.querys.name.name=名称
md.table.request.querys.value.name=值
md.table.request.querys.desc.name=备注
md.table.request.querys.required.name=必须

md.table.request.form.name.name=名称
md.table.request.form.value.name=值
md.table.request.form.desc.name=备注
md.table.request.form.type.name=类型
md.table.request.form.required.name=必须

md.table.response.headers.name.name=名称
md.table.response.headers.value.name=值
md.table.response.headers.desc.name=备注
md.table.response.headers.required.name=必须

md.table.request.body.name.name=名称
md.table.request.body.default.name=默认值
md.table.request.body.desc.name=备注
md.table.request.body.type.name=类型
md.table.request.body.required.name=必须

md.table.response.body.name.name=名称
md.table.response.body.default.name=默认值
md.table.response.body.desc.name=备注
md.table.response.body.type.name=类型
md.table.response.body.required.name=必须

# for tables(methodDoc)
md.table.methodDoc.params.name.name=名称
md.table.methodDoc.params.default.name=默认值
md.table.methodDoc.params.desc.name=备注
md.table.methodDoc.params.type.name=类型
md.table.methodDoc.params.required.name=必须

md.table.methodDoc.return.name.name=名称
md.table.methodDoc.return.default.name=默认值
md.table.methodDoc.return.desc.name=备注
md.table.methodDoc.return.type.name=类型
md.table.methodDoc.return.required.name=必须

# alias for bool
md.bool.true=是
md.bool.false=否
``````

***快速配置***

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/markdown.cn.config
```
或者
```properties
properties.additional=https://gitee.com/tangcent/easy-yapi/raw/master/third/markdown.cn.config
```