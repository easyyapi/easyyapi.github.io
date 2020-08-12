# Yapi Render(v1.6.1+)

- 目前`yapi`的[open api](https://hellosean1025.github.io/yapi/openapi.html)更新接口并不会渲染接口备注信息，如果接口备注信息中含有`markdown`内容，需要配置`markdown`渲染器

## `markdown`渲染器

渲染器目前分为两种，一种是本地渲染器，一种是远程渲染器

***本地渲染器***

有三条可用的配置规则:
1. `markdown.render.shell`:渲染执行的`shell`，插件将需要渲染的markdown暂存到临时目录，将文件`绝对路径`作为参数追加到此`shell`后.
如果希望将`绝对路径`放在其他位置，使用`#fileName`占位.
2. `markdown.render.work.dir`: 执行渲染`shell`的工作文件夹
3. `markdown.render.timeout`:渲染超时时间

配置示例:
```properties
markdown.render.shell=/usr/local/bin/node render.js
markdown.render.work.dir=/项目路径/yapi-markdown-render
markdown.render.timeout=3000
```

***远程渲染器***

只需要配置远程服务地址即可:
1. `markdown.render.server`:远程服务地址，这个地址接受`POST`HTTP请求

配置示例:
```properties
markdown.render.server=http://localhost:3000/render
```

## 目前可用渲染器:

1. `node`版`markdown`渲染器:[yapi-markdown-render](https://github.com/easyyapi/yapi-markdown-render)

---

***目前提供的渲染服务***

- 服务保证不以任何途径保存用户上传的内容,服务运行的代码始终与[yapi-markdown-render](https://github.com/easyyapi/yapi-markdown-render)主分支保持一致.
- 不保证此服务长期稳定有效.请尽量自行部署[yapi-markdown-render](https://github.com/easyyapi/yapi-markdown-render)使用
- 为防止服务被攻击/滥用,服务可能记录访问ip,亦有可能将异常ip加入黑名单.如有顾虑,请自行部署.

```properties
markdown.render.server=http://www.itangcent.com/render
```