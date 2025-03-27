# Markdown模板配置

> ⭐ **推荐配置方式**
> 
> 从 v2.7.9 版本开始，我们推荐使用模板配置来自定义API文档格式。相比旧的 [markdown自定义规则](/setting/markdown.md)，模板配置提供了更灵活和强大的自定义能力。

## 配置方式

在配置文件中添加以下配置：

```properties
api.template=模板文件地址
```

快速配置markdown文档导出为中文模板：

```properties
api.template=https://raw.githubusercontent.com/tangcent/easy-yapi/refs/heads/master/third/template/api.template.zh.md
```

## 模板语法

### 基础变量

模板支持以下基础变量：

| 变量        | 描述       |
|-----------|----------|
| `$name`   | API名称    |
| `$path`   | API路径    |
| `$method` | HTTP请求方法 |
| `$desc`   | API描述    |
| `$headers` | 请求头信息 |
| `$paths` | 路径参数信息 |
| `$querys` | 查询参数信息 |
| `$form` | 表单数据信息 |
| `$body` | 请求体信息 |
| `$response.headers` | 响应头信息 |
| `$response.body` | 响应体信息 |

### 条件语句

使用 `${if condition}` 和 `${end}` 来控制内容的显示：

``````text
${if headers}
**请求头:**
${md.table(headers).title([name:"名称", value:"值", required:"是否必需", desc:"描述"])}
${end}
``````

### 表格生成

使用 `md.table()` 和 `md.objectTable()` 来生成表格：

1. 普通表格：`${md.table(data).title([column1:"标题1", column2:"标题2"])}`
2. 对象表格：`${md.objectTable(data).title([name:"名称", type:"类型", desc:"描述"])}`

### JSON格式化

使用 `md.json()` 和 `md.json5()` 来格式化JSON数据：

``````text
**请求示例:**
```json
${md.json(body)}
```

**响应示例:**
```json
${md.json5(response.body)}
```
``````

### 文本替换

使用 `${@text.[type].[value]=默认值}` 来定义文本替换规则, 例如：

```markdown
${@text.boolean.true=是}
${@text.boolean.false=否}
${@text.null.null=-}
```

## 完整示例

以下是一个完整的中文API文档模板示例：

``````text
${@text.boolean.true=是}
${@text.boolean.false=否}
${@text.null.null=-}

## $name

> 基本信息
**路径:** $path
**方法:** $method
**描述:** $desc

> 请求
${if headers}
**请求头:**
${md.table(headers).title([name:"名称", value:"值", required:"是否必需", desc:"描述"])}
${end}

${if paths}
**路径参数:**
${md.table(paths).title([name:"名称", value:"值", required:"是否必需", desc:"描述"])}
${end}

${if querys}
**查询参数:**
${md.table(querys).title([name:"名称", value:"值", required:"是否必需", desc:"描述"])}
${end}

${if form}
**表单数据:**
${md.table(form).title([name:"名称", value:"值", required:"是否必需", type:"类型", desc:"描述"])}
${end}

${if body}
**请求体:**
${md.objectTable(body).title([name:"名称", type:"类型", desc:"描述"])}

**请求示例:**

```json
${md.json(body)}
```

${end}

> 响应
${if response.headers}
**响应头:**
${md.table(response.headers).title([name:"名称", value:"值", required:"是否必需", desc:"描述"])}
${end}

${if response.body}
**响应体:**
${md.objectTable(response.body).title([name:"名称", type:"类型", desc:"描述"])}

**响应示例:**

```json
${md.json5(response.body)}
```

${end}

``````

## 快速开始

1. 创建你的自定义模板文件
2. 将模板文件放在以下任一位置：
   - 远程：托管到代码托管平台（如 GitHub），然后使用完整的 URL 地址
   - 本地：放在项目配置文件中，使用相对路径，例如：`api.template=${_curr_path}/api.template.zh.md`
3. 在配置文件中设置 `api.template` 为你的模板文件地址
4. 重新生成API文档即可看到新的格式 