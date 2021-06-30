**支持以下使用方法**

1. 打开项目中的包含rpc的文件或者在IDEA的左边项目文件区域选择文件或者文件夹
    使用快捷键`alt shift E(windows)/ctrl E(mac)`
    然后选择要导出的API,选择导出渠道`Yapi/Markdown`
    点击[✔]按钮或者按回车键完成导出
    
2. 打开项目中的包含rpc的文件
    右键文件内容选择`Generate...`或者用`[Alt + Insert]/[Ctrl+Enter]`(快捷键可能不一样)"
    然后选择`ExportYapi/ExportMarkdown`

3. 在IDEA的左边项目文件区域选择文件或者文件夹
    鼠标点击最上方<kbd>Code</kbd> > <kbd>ExportYapi/ExportMarkdown</kbd>

---

**rpc相关规则**

| &nbsp;&nbsp;&nbsp;&nbsp;规则的key | 规则目标(上下文) | 版本 | 规则描述 |
| ------------ | ------------ | ------------ |------------ |
| ☆[mdoc.class.filter](/setting/rules/mdoc_class_filter.html) | class | v0.9.5+ | 选择哪些类可以导出方法文档(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.filter | method | v0.9.5+ | 选择哪些方法可以导出方法文档(rpc) |
| ☆[mdoc.method.path](/setting/rules/mdoc_method_path.html) | method | v0.9.5+ | 设置方法文档(rpc)的路径 |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.http.method | method | v0.9.5+ | 设置方法文档(rpc)HTTP请求方式 |

点击[规则配置](/setting/config-rule.html)查看更多.

----

- 导出rpc方法的功能默认是关闭的 , 开启需要勾选:<kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Support</kbd> > <kbd>methodDoc</kbd> , 参见:[IDEA配置](/setting/ide-setting.html)

- rpc文档支持导出到`yapi`/`markdown`
