
# 在IDE中设置(全局)

- <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## 通用配置

![avatar](/asset/idea-general.png)

**Common** :

 - log: 一般来说使用一段时间后,log可以设置为`HIGH`,减少不必要的输出<br>当出现异常情况时,可以设置为`LOW`,获的更多信息

**Support** :

 - methodDoc: 勾选后，允许导出方法文档, 亦可用于导出rpc相关文档<br>
 支持导出到`markdown/yapi`

### Postman:

 - token: 用于设置或更新`postman privateToken`, 可以从[Postman Integrations Dashboard](https://go.postman.co/integrations/services/pm_pro_api)获得 

### Yapi:

 - server 即部署的yapi地址，如:`http://127.0.0.1:3000/`
 - tokens 即yapi项目中用于请求项目openapi的私有token，获取方式为`项目->设置->token 配置 -> 工具标识`

**Markdown** :

 - outputDemo: 导出`markdown`文档时, 为每个API生成一个响应demo
 - outputCharset: 选择导出`markdown`文档时使用的字符集

**Cache** :

 - global: 全局缓存
 - project: 当前项目缓存

**intelligent** :

 - inferEnable: 允许插件在遇到不确定的方法返回类型为(Object，Some\<Object>)时尝试通过代码流进行推断,并根据项目需求设置maxDeep(最大推断深度)
 - maxDeep: 允许推断的最大深度
 - getter as field: 尝试读取getter方法作为json字段
 - use recommend config: 使用内置的推荐配置


## 内置可选推荐配置

![avatar](/asset/idea-recommend.png)

- 可以通过勾选来选择需要的配置
- 内置推荐配置源代码: [portal](https://github.com/tangcent/easy-yapi/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)