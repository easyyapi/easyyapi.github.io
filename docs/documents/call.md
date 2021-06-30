# Call(类Postman)

- 打开项目中的包含api的文件
    右键文件内容选择`Generate...`或者用`[Alt + Insert]/[Ctrl+Enter]`(快捷键可能不一样)"
    然后选择`Call`
- 可以自行配置快捷键
- 可以通过[相关配置](/setting/rules/http_call_before.html)实现自动登录

![call](../asset/idea-call.png)

---

**Call相关规则**

| &nbsp;&nbsp;&nbsp;&nbsp;规则的key | 规则目标(上下文) | 版本 | 规则描述 |
| ------------ | ------------ | ------------ |------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;[http.call.before](/setting/rules/http_call_before.html)  | request | v1.9.0+ | http请求前回调 |
| &nbsp;&nbsp;&nbsp;&nbsp;[http.call.after](/setting/rules/http_call_after.html)  | request&response | v1.9.0+ | http请求后回调 |

点击[规则配置](/setting/config-rule.html)查看更多.
