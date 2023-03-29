# `runtime`是提供运行时的一些信息(v2.5.5+)

---

# 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| channel() | string | 获取当前导出的渠道, markdown/postman/yapi | runtime.channel()| 
| projectName() | string | 获取当前项目名 | runtime.projectName()| 
| projectPath() | string | 获取当前项目路径 | runtime.projectPath()| 
| module() | string | 获取当前模块名 | runtime.module()|