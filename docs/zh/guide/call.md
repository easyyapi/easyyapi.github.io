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

## API Dashboard

EasyYapi 提供了 API Dashboard 工具窗口，方便快速访问 API 测试和管理。可以从 IDEA 底部工具窗口栏打开 Dashboard。

API Dashboard 允许你：

- 浏览当前项目中检测到的所有 API
- 快速调用任何 API，自动填充参数
- 以结构化格式查看响应数据
