# Call API

EasyYapi 支持在 IDEA 中直接发起 API 请求，方便快速测试和调试。

## 使用方法

1. 打开项目中包含 API 的文件
2. 右键文件内容选择 `Call`
3. 在弹出的面板中配置请求参数
4. 点击发送按钮发起请求

## 配置

### 请求前回调

使用 `http.call.before` 在发送请求前执行自定义逻辑：

```properties
http.call.before=groovy:'''
it.header("Authorization", "Bearer " + localStorage.get("token"))
'''
```

### 请求后回调

使用 `http.call.after` 在收到响应后执行自定义逻辑：

```properties
http.call.after=groovy:'''
if (it.response().code() == 200) {
    def body = it.response().body()
    localStorage.set("token", body.token)
}
'''
```

详见 [http.call.before](/zh/settings/rules/http_call_before) 和 [http.call.after](/zh/settings/rules/http_call_after)。

## gRPC 调用

EasyYapi 还支持直接从 IDE 调用 gRPC 方法。此功能默认禁用，需要在配置中启用：

```properties
grpc.call.enabled=true
```

启用 gRPC 调用后，插件需要 gRPC 运行时 JAR 才能调用方法。可以通过以下方式配置运行时依赖：

- **IDE 设置**：在 <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > gRPC Runtime 中使用 **Auto Detect** 按钮自动检测并解析依赖。
- **配置文件**：使用 `grpc.artifact.configs`、`grpc.additional.jars` 和 `grpc.repositories` 属性。

详见 [gRPC 框架支持](/zh/framework/grpc)。

## 编辑器行标记导航

EasyYapi 会在编辑器中 API 方法旁添加行标记图标（▶）。点击该图标会打开 **API Dashboard** 并直接导航到对应的端点。

### 支持的注解

行标记图标会出现在以下注解标注的方法上：

| 框架 | 注解 |
|------|------|
| Spring MVC | `@RequestMapping`、`@GetMapping`、`@PostMapping`、`@PutMapping`、`@DeleteMapping`、`@PatchMapping` |
| JAX-RS | `@GET`、`@POST`、`@PUT`、`@DELETE`、`@PATCH`、`@Path` |
| gRPC | 继承 `BindableService` 或标注 `@GrpcService` 的类中的 RPC 方法 |

### 自动重新扫描

如果当前索引中未找到端点（例如切换分支后或文件是新建的），点击行标记图标会自动触发对当前文件的重新扫描，然后导航到 Dashboard。

## API Dashboard

EasyYapi 提供了 **API Dashboard** 工具窗口，用于浏览、测试和管理 API 端点。可从 IDEA 底部工具窗口栏打开。

### 浏览端点

Dashboard 以树形结构展示所有检测到的 API 端点，按模块和类组织：

- **颜色编码**：HTTP 方法按颜色区分（GET=蓝色、POST=绿色、PUT=橙色、DELETE=红色、PATCH=青色），gRPC 端点显示为紫色，并带有流类型标识（`gRPC:U` 表示一元调用、`gRPC:S` 表示服务端流、`gRPC:C` 表示客户端流、`gRPC:B` 表示双向流）
- **搜索**：在搜索框中输入关键词，可按名称、路径、文件夹、描述或类名过滤端点（不区分大小写，带防抖输入）
- **工具栏操作**：刷新、导出、全部折叠、全部展开

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

### 发送请求

1. 在树中选择一个端点
2. 根据需要配置主机、参数、请求头和请求体
3. 点击 **Send** 执行请求
4. 在下方面板查看响应

对于 gRPC 端点，Dashboard 会在发送前检查 gRPC 调用是否已启用以及运行时依赖是否可用。如果未配置，会提示你打开设置。

### 右键菜单

在树中右键点击端点或文件夹可访问：

| 操作 | 说明 |
|------|------|
| **Export** | 将选中的端点导出为 Markdown、YApi、Postman、cURL 或 HttpClient |
| **Copy Path** | 将端点路径复制到剪贴板 |
| **Copy as cURL** | 将端点的 cURL 命令复制到剪贴板 |
| **Navigate to Source** | 跳转到端点的源代码 |
| **Reset to Default** | 将用户修改重置为默认值 |

双击端点可直接导航到其源代码。

### 自动保存

对请求参数、请求头、主机和请求体的用户修改会自动保存，当你再次访问同一端点时会自动恢复。
