# class.is.grpc

Determine whether a class is a gRPC service implementation.

## Usage

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.stub.AbstractStub")
```

This rule is used to recognize gRPC service classes. When the gRPC framework support is enabled, classes that extend gRPC stubs or implement gRPC service interfaces will be treated as API endpoints.

## See Also

- [class.is.ctrl](./class_is_ctrl) — Generic controller recognition
