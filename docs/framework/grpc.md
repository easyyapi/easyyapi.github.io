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

## Configuration

### gRPC Artifact Configs

Configure gRPC artifact coordinates for proto file resolution:

```properties
grpc.artifact.configs=com.example:my-proto:1.0.0
```

### gRPC Additional Jars

Add additional JAR files for proto resolution:

```properties
grpc.additional.jars=/path/to/proto.jar
```

### gRPC Repositories

Configure Maven repositories for artifact resolution:

```properties
grpc.repositories=https://repo.maven.apache.org/maven2
```

### gRPC Call

Enable gRPC call functionality to invoke gRPC methods directly from the IDE:

```properties
grpc.call.enabled=true
```

## Class Recognition

The `class.is.grpc` rule determines whether a class is a gRPC service:

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.stub.AbstractStub")
```

## See Also

- [Export RPC Doc](/guide/export-rpc) — Exporting RPC documentation
