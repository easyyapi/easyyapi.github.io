# `runtime`是提供运行时的一些信息(v2.5.5+)

---

## 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| channel() | string | 获取当前导出的渠道, markdown/postman/yapi | runtime.channel()| 
| projectName() | string | 获取当前项目名 | runtime.projectName()| 
| projectPath() | string | 获取当前项目路径 | runtime.projectPath()| 
| module() | string | 获取当前模块名(应用规则之后的) | runtime.module()|
| moduleName() | string | 获取当前模块名(原始的) | runtime.moduleName()|
| modulePath() | string | 获取当前模块路径 | runtime.modulePath()|
| filePath() | string | 正在解析的文件路径 | runtime.filePath()|
| getBean(className) | object | 获得插件内的Bean(仅支持com.itangcent.*) | runtime.getBean("com.itangcent.intellij.jvm.DocHelper")|
| async(runnable) | null | 异步执行操作 | runtime.async{logger.info("async")}|