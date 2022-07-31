## 导出普通java method文档

- 导出普通method的功能默认是关闭的 , 开启需要勾选:<kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Support</kbd> > <kbd>methodDoc</kbd> & <kbd>generic</kbd>, 参照:[IDEA配置](/setting/ide-setting.html)

- 普通method支持导出到`markdown`
- 为了兼容旧用户, 目前依然保留了导出到`yapi`的功能, 但不建议新用户采用
- 如果希望导出`rpc`到`yapi`/`postman`, 参照: [Generic](/documents/generic.html)

**相关规则**

| &nbsp;&nbsp;&nbsp;&nbsp;规则的key | 规则目标(上下文) | 版本 | 规则描述 |
| ------------ | ------------ | ------------ |------------ |
| ☆[mdoc.class.filter](/setting/rules/mdoc_class_filter.html) | class | v0.9.5+ | 选择哪些类可以导出方法文档(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.filter | method | v0.9.5+ | 选择哪些方法可以导出方法文档(rpc) |
| ☆[~~mdoc.method.path~~](/setting/rules/mdoc_method_path.html) | method | v0.9.5+ | 设置方法文档(rpc)的路径<br>仅用于兼容旧的导出方式, 不建议使用 |
| &nbsp;&nbsp;&nbsp;&nbsp;~~mdoc.method.http.method~~ | method | v0.9.5+ | 设置方法文档(rpc)HTTP请求方式<br>仅用于兼容旧的导出方式, 不建议使用 |

点击[规则配置](/setting/config-rule.html)查看更多.