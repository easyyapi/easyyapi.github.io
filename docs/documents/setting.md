# yapi相关参数配置

- 在导出过程中如果需要yapi相关参数，将会以弹窗的方式提供输入
- 也可以在<kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> 中手动配置
<br>首次使用此插件时，建议开启inferEnable,这将允许插件在遇到不确定的方法返回类型为(Object，Some\<Object>)时尝试通过代码流进行推断,并根据项目需求设置maxDeep(最大推断深度)
- 需要提供的参数有
  - server 即部署的yapi地址，如:http://127.0.0.1:3000/
  - tokens 即yapi项目中用于请求项目openapi的私有token，获取方式为 项目->设置->token 配置 -> 工具标识
