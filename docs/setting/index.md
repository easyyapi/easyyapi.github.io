# 通用配置

### 需要时弹框输入

当导出API的过程中需要提供某些参数,插件将以弹框的方式提供输入.

### 在IDE中设置(全局)

- <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>
- 首次使用此插件时，建议开启inferEnable,这将允许插件在遇到不确定的方法返回类型为(Object，Some\<Object>)时尝试通过代码流进行推断,并根据项目需求设置maxDeep(最大推断深度)

### 使用配置文件(当前项目)

 - 将配置文件添加到项目或模块根目录中

| 文件  |  类型  |  适用的操作  |
| ------------ | ------------ | ------------ |
| .easy.api.config | property | markdown/postman/yapi |
| .easy.api.yml/.easy.api.yaml | yml | markdown/postman/yapi |
| .postman.config | property | postman |
| .postman.yml/.postman.yaml | yml | postman |
| .yapi.config | property | yapi |
| .yapi.yml/.postman.yaml | yml | yapi |