# 导出`dubbo`文档

***如果仅希望导出`markdown`***

> 参照[导出普通java method文档](/documents/export_methodDoc.html)即可


***如果希望导出到`postman`/`yapi`***


> 参照[自定义框架](/documents/generic.html)

1. 取消勾选 <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Support</kbd> > <kbd>methodDoc</kbd>

2. 勾选 <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Support</kbd> > <kbd>generic export</kbd>

3. 在<kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>BuiltinConfig</kbd>或者[本地文件](/setting/local-file-config.html)引入配置:
```
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/dubbo.config
```
4. 如果配置不满足预期, 复制并修改[dubbo.config](https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/dubbo.config)的内容放在配置里, 替换掉上面的引入配置