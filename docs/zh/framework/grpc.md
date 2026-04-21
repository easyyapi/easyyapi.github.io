# gRPC

EasyYapi 支持从 gRPC 服务实现导出 API 文档。

## 概述

gRPC 支持可以自动识别 gRPC 服务类并提取：

- gRPC 服务路径（`/<package>.<ServiceName>/<MethodName>`）
- 流类型（单向、服务端流、客户端流、双向流）
- 请求/响应 protobuf 消息类型

## 启用 gRPC 支持

gRPC 支持默认启用。可以在 IDE 设置中切换：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## 类识别

满足以下任一条件的类将被识别为 gRPC 服务：

1. 继承 `io.grpc.BindableService`（或生成的 `ImplBase` 父类）
2. 标注了 `@GrpcService` 注解（来自 [grpc-spring-boot-starter](https://yidongnan.github.io/grpc-spring-boot-starter/)）
3. 匹配 `class.is.grpc` 规则覆盖

### class.is.grpc 规则

`class.is.grpc` 规则可用于自定义 gRPC 服务识别。当此规则对某个类求值为 `true` 时，该类将被视为 gRPC 服务，而不管默认检测逻辑如何。

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService")
```

详见 [class.is.grpc](/zh/settings/rules/class_is_grpc)。

## 配置

### gRPC 调用

启用 gRPC 调用功能，直接从 IDE 调用 gRPC 方法。此功能在 IDE 设置中配置：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>gRPC</kbd>

勾选 **Enable gRPC call** 复选框即可启用 gRPC 调用支持。

启用 gRPC 调用后，还需要配置 gRPC 运行时依赖。插件需要 gRPC 运行时 JAR 才能调用方法。可以使用 IDE 设置面板中的 **Auto Detect** 按钮自动检测并解析所需依赖。

### gRPC Artifact 配置

在 IDE 设置中配置 gRPC artifact 坐标用于运行时依赖解析。格式为 `groupId:artifactId:version:enabled`。

### gRPC 额外 JAR

在 IDE 设置中添加额外的 JAR 文件用于运行时解析。

### gRPC 仓库

在 IDE 设置中配置 artifact 仓库用于依赖解析。支持的类型为 `maven`、`gradle` 和 `custom`。

## 另见

- [导出 RPC 文档](/zh/guide/export-rpc) — 导出 RPC 文档
- [调用 API](/zh/guide/call#grpc-调用) — 从 IDE 调用 gRPC 方法
- [IDE 设置](/zh/settings/ide-setting) — 框架开关设置
