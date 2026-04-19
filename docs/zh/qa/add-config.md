# 如何添加配置文件

EasyYapi 支持多种方式向项目添加配置文件。

## 方式一：项目根目录配置

在项目根目录创建 `.easy.api.config` 文件：

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

## 方式二：模块根目录配置

在模块根目录创建 `.easy.api.config` 文件：

```
your-project/
├── module-a/
│   ├── .easy.api.config
│   └── src/
├── module-b/
│   ├── .easy.api.config
│   └── src/
└── pom.xml
```

## 方式三：远程配置

在本地配置文件中配置远程 URL：

```properties
remote.url=http://your-config-server.com/easy-api.config
```

## 配置优先级

1. 远程配置（最高优先级）
2. 模块根目录配置
3. 项目根目录配置
4. IDE 设置（最低优先级）

详见 [本地配置文件](/zh/settings/local-file-config) 和 [远程配置文件](/zh/settings/remote-config)。
