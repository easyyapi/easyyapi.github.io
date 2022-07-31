# `config`是提供的配置读取工具(v1.9.5+)

- 读取当前[配置](../local-file-config.md)

## 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| get(key) | string | 获取配置中的一个值 | config.get("key")|
| getValues(key) | array\<string> | 获取配置中的多个值 | config.getValues("key")|
| resolveProperty(str) | string | 解析字符串中的占位符 | config.resolveProperty("${key}")|
