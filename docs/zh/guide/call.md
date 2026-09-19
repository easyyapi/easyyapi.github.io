# Call API

EasyYapi 支持在 IDEA 中直接发起 API 请求，方便快速测试和调试。

## 使用方法

1. 打开项目中包含 API 的文件
2. 点击 API 方法旁的行标记图标（▶），在 API Explorer 中打开该端点
3. 配置请求参数（主机、请求头、请求体等）
4. 点击 **Send** 发起请求

## 配置

### 请求前回调

使用 `http.call.before` 在发送请求前执行自定义逻辑：

````properties
http.call.before=groovy:```
logger.info("Sending " + request.method() + " " + request.url())
```
````

### 请求后回调

使用 `http.call.after` 在收到响应后执行自定义逻辑：

````properties
http.call.after=groovy:```
if (response.code() == 200) {
    def body = new JsonSlurper().parseText(response.body())
    if (body.token) {
        localStorage.set("token", body.token)
    }
}
```
````

详见 [http.call.before](/zh/settings/rules/http_call_before) 和 [http.call.after](/zh/settings/rules/http_call_after)。

## gRPC 调用

EasyYapi 还支持直接从 IDE 调用 gRPC 方法。此功能默认禁用，需要在 IDE 设置中启用：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>gRPC</kbd>

勾选 **Enable gRPC call** 复选框即可启用 gRPC 调用支持。

启用 gRPC 调用后，插件需要 gRPC 运行时 JAR 才能调用方法。可以通过以下方式配置运行时依赖：

- **IDE 设置**：在 <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > gRPC Runtime 中使用 **Auto Detect** 按钮自动检测并解析依赖。

详见 [gRPC 框架支持](/zh/framework/grpc)。

## 编辑器行标记导航

EasyYapi 会在编辑器中 API 方法旁添加行标记图标（▶）。点击该图标会打开 **API Explorer** 并直接导航到对应的端点。

### 支持的注解

行标记图标会出现在以下注解标注的方法上：

| 框架 | 注解 |
|------|------|
| Spring MVC | `@RequestMapping`、`@GetMapping`、`@PostMapping`、`@PutMapping`、`@DeleteMapping`、`@PatchMapping` |
| JAX-RS | `@GET`、`@POST`、`@PUT`、`@DELETE`、`@PATCH`、`@Path` |
| gRPC | 继承 `BindableService` 或标注 `@GrpcService` 的类中的 RPC 方法 |

### 自动重新扫描

如果当前索引中未找到端点（例如切换分支后或文件是新建的），点击行标记图标会自动触发对当前文件的重新扫描，然后导航到 API Explorer。

## API Explorer

EasyYapi 提供了 **API Explorer** 工具窗口，用于浏览、测试和管理 API 端点。可从 IDEA 底部工具窗口栏打开。

### 浏览端点

API Explorer 以树形结构展示所有检测到的 API 端点，按模块和类组织：

- **颜色编码**：HTTP 方法按颜色区分（GET=蓝色、POST=绿色、PUT=橙色、DELETE=红色、PATCH=青色），gRPC 端点显示为紫色，并带有流类型标识（`gRPC:U` 表示一元调用、`gRPC:S` 表示服务端流、`gRPC:C` 表示客户端流、`gRPC:B` 表示双向流）
- **搜索**：在搜索框中输入关键词，可按地址、名称、路径、文件夹、描述或类名过滤端点（不区分大小写，带防抖输入）
- **工具栏操作**：刷新、导出、全部折叠、全部展开

#### 搜索框支持的写法

API Explorer 的搜索框与 **Search Everywhere** 共用同一套匹配逻辑，因此两者接受的查询语法一致：

- 一次查询可以同时匹配**地址和名称**——`user 用户` 能匹配到名称为「获取用户信息」的 `/api/user/get`
- **模糊匹配**：`aus用户` 会作为子序列命中 `/api/user/get`
- 少于三个字符的词必须精确匹配，否则两个字母的查询几乎会命中所有端点
- 粘贴的路径**不会**参与模糊匹配：它始终表示精确条件，这样缩短过的 URL 依然可用
- **方法前缀**（`GET /users`）按 HTTP 方法过滤；路径模板可以匹配具体值（`/api/users/42` 能找到 `/api/users/{id}`）
- 结果按得分排序，因此精确命中路径的结果排在模糊命中之前

### 端点详情

在树中选择一个端点后，右侧会打开详情面板，包含：

- **请求行**：HTTP 方法、主机 URL（带历史记录）、路径、发送和重置按钮
- **标签页参数编辑器**：
  - **Path** — 路径参数（如 `/users/{id}`）
  - **Params** — 查询字符串和 Cookie 参数
  - **Headers** — 请求头
  - **Form** — 表单数据参数（用于 `application/x-www-form-urlencoded` 或 `multipart/form-data`）
  - **Body** — JSON 请求体（带语法高亮）
- **响应面板**：状态码、响应体（支持 Pretty/Raw JSON 切换和复制按钮）、响应头

#### 二进制响应

文件类响应（`octet-stream`、图片、PDF、ZIP 等）不再按文本解码。API Explorer 会以元信息摘要的形式展示，并提供 **Save as** 操作，确保原始字节不丢失：

| 响应类型 | 你看到的内容 |
|----------|--------------|
| 文本（JSON、XML、HTML 等） | 在 Body 标签页中格式化展示。超过 500,000 字符的响应体会被截断显示。 |
| 二进制 | 内容类型、大小以及 **Save as** 按钮——字节被流式写入临时文件，绝不会当作文本渲染。 |

脚本中也提供了同样的区分：

| 方法 | 说明 |
|------|------|
| `response.bytes()` | 原始响应字节；文本响应时为 `null` |
| `response.saveBody(path)` | 将响应体写入 `path`；无内容可保存时返回 `false` |
| `pm.response.responseSize` | 响应体大小，单位为**字节**（此前返回的是字符数） |

### 发送请求

1. 在树中选择一个端点
2. 根据需要配置主机、参数、请求头和请求体
3. 点击 **Send** 执行请求
4. 在下方面板查看响应

对于 gRPC 端点，API Explorer 会在发送前检查 gRPC 调用是否已启用以及运行时依赖是否可用。如果未配置，会提示你打开设置。

### 右键菜单

在树中右键点击端点或文件夹可访问：

| 操作 | 说明 |
|------|------|
| **Export** | 将选中的端点导出为 Markdown、YApi、Postman、cURL、HttpClient、Hoppscotch、OpenAPI 或 ApiPost |
| **Copy API URL** | 逐个复制所选端点的地址，每行一条，格式为 `METHOD /path` |
| **Copy Path** | 将端点路径复制到剪贴板 |
| **Copy as cURL** | 将端点的 cURL 命令复制到剪贴板 |
| **Navigate to Source** | 跳转到端点的源代码 |
| **Reset to Default** | 将用户修改重置为默认值 |

双击端点可直接导航到其源代码。

**Copy API URL** 复制的是**地址**而非仅为路径——是 `GET /api/user/get` 而不是 `/api/user/get`。带上 HTTP 方法，是因为仅有路径时无法区分 `GET /user/{id}` 与 `PUT /user/{id}`。它走的是所有导出动作共用的入口，因此复制出来的地址与导出同一批接口所得的结果一致。地址中不包含主机：主机属于部署层面的信息，由环境选择器决定。可以在 **Features** 中关闭（`Copy API URL`）。

### Search Everywhere

使用 IntelliJ 的 **Search Everywhere**（双击 `Shift`）可在整个项目中查找端点。端点会出现在独立的 **APIs** 标签页中，同时也会出现在 **All** 里，并支持上文 [搜索框支持的写法](#搜索框支持的写法) 列出的全部形式。点击结果可跳转到源码方法。

可以在 **Features** 中关闭 **APIs** 标签页（`Search Everywhere`）。它读取的是保留的 API 索引——API Explorer 的**刷新**会重新填充该索引——因此即使关闭了 API 扫描，它依然可用。

### Postman 环境同步

环境可以在 EasyYapi 与 Postman 之间**双向同步**，这样主机地址或 Token 只需定义一次，两处都能使用。

同步入口位于 API Explorer 的环境选择器中：

- 点击内联环境面板中的 **Sync ▼** 按钮，或右键点击环境下拉框，从菜单中选择操作
- **Push to Postman** —— 将当前项目环境及其变量推送到 Postman
- **Pull from Postman** —— 将 Postman 环境拉取到项目中（拉取完成后本地环境列表会刷新）

两个操作都需要先在设置中配置 **Postman API Token**，否则同步操作保持禁用。拉取一个本地已存在同名的环境时，需要选择冲突处理策略：

| 策略 | 行为 |
|------|------|
| **Replace** | 用 Postman 的值替换本地变量 |
| **Merge** | 两边都有的键以 Postman 为准；仅本地有的键保留 |
| **Skip** | 保持本地环境不变 |

### 自动保存

对请求参数、请求头、主机和请求体的用户修改会自动保存，当你再次访问同一端点时会自动恢复。**Reset to Default** 会丢弃这些修改并重新从源码读取，因此新增到 DTO 中的字段能够重新出现。
