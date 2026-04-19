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
