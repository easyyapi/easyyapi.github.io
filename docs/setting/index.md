# 通用配置

### 需要时弹框输入

当导出API的过程中需要提供某些参数,插件将以弹框的方式提供输入.

### 在IDE中设置(全局)

- <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>
- 首次使用此插件时，建议开启inferEnable,这将允许插件在遇到不确定的方法返回类型为(Object，Some\<Object>)时尝试通过代码流进行推断,并根据项目需求设置maxDeep(最大推断深度)

### 使用配置文件(当前项目)

 - 将配置文件添加到项目根目录中
 - .easy.api.config 对所有操作有效
 - .postman.config 对Postman相关操作有效
 - .yapi.config 对Yapi相关操作有效