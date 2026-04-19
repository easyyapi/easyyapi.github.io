# gRPC

EasyYapi supports exporting API documentation from gRPC service implementations.

## Overview

gRPC support can automatically recognize gRPC service classes and extract:

- gRPC service path (`/<package>.<ServiceName>/<MethodName>`)
- Streaming type (unary, server-streaming, client-streaming, bidirectional)
- Request/response protobuf message types

## Enable gRPC Support

gRPC support is enabled by default. You can toggle it in IDE settings:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## Class Recognition

A class is recognized as a gRPC service if it meets any of the following conditions:

1. Extends `io.grpc.BindableService` (or a generated `ImplBase` superclass)
2. Is annotated with `@GrpcService` (from [grpc-spring-boot-starter](https://yidongnan.github.io/grpc-spring-boot-starter/))
3. Matches the `class.is.grpc` rule override

### class.is.grpc Rule

The `class.is.grpc` rule can be used to customize gRPC service recognition. When this rule evaluates to `true` for a class, it is treated as a gRPC service regardless of the default detection logic.

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService")
```

See [class.is.grpc](/settings/rules/class_is_grpc) for more details.

## Configuration

### gRPC Call

Enable gRPC call functionality to invoke gRPC methods directly from the IDE:

```properties
grpc.call.enabled=true
```

When gRPC call is enabled, you also need to configure the gRPC runtime dependencies. The plugin needs gRPC runtime JARs to invoke methods. You can use the **Auto Detect** button in the IDE settings panel to automatically detect and resolve the required dependencies.

### gRPC Artifact Configs

Configure gRPC artifact coordinates for runtime dependency resolution. The format is `groupId:artifactId:version:enabled`:

```properties
grpc.artifact.configs=io.grpc:grpc-netty-shaded:latest:true
```

### gRPC Additional Jars

Add additional JAR files for runtime resolution:

```properties
grpc.additional.jars=/path/to/proto.jar
```

### gRPC Repositories

Configure artifact repositories for dependency resolution. Supported types are `maven`, `gradle`, and `custom`:

```properties
grpc.repositories=maven:true:/Users/user/.m2/repository
grpc.repositories=gradle:true:/Users/user/.gradle/caches/modules-2/files-2.1
grpc.repositories=custom:true:/path/to/custom/repo
```

## See Also

- [Export RPC Doc](/guide/export-rpc) — Exporting RPC documentation
- [Call API](/guide/call#grpc-call) — Calling gRPC methods from the IDE
- [IDE Settings](/settings/ide-setting) — Framework toggle settings
