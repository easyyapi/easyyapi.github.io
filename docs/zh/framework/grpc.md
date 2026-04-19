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

## 配置

### gRPC Artifact 配置

配置 gRPC artifact 坐标用于 proto 文件解析：

```properties
grpc.artifact.configs=com.example:my-proto:1.0.0
```

### gRPC 额外 JAR

添加额外的 JAR 文件用于 proto 解析：

```properties
grpc.additional.jars=/path/to/proto.jar
```

### gRPC 仓库

配置 Maven 仓库用于 artifact 解析：

```properties
grpc.repositories=https://repo.maven.apache.org/maven2
```

### gRPC 调用

启用 gRPC 调用功能，直接从 IDE 调用 gRPC 方法：

```properties
grpc.call.enabled=true
```

## 类识别

`class.is.grpc` 规则判断类是否为 gRPC 服务：

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.stub.AbstractStub")
```

## 另见

- [导出 RPC 文档](/zh/guide/export-rpc) — 导出 RPC 文档
