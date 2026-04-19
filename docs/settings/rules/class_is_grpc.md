# class.is.grpc

Determine whether a class is a gRPC service implementation.

## Default Recognition

By default, gRPC services are recognized without this rule if the class:

- Extends `io.grpc.BindableService` (or a generated `ImplBase` superclass)
- Is annotated with `@GrpcService` (from `net.devh.boot.grpc.server.service.GrpcService`)

## Usage

Use this rule to override or extend the default gRPC service recognition:

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService")
```

When this rule evaluates to `true` for a class, it is treated as a gRPC service regardless of the default detection logic.

## See Also

- [gRPC Framework Support](/framework/grpc) — gRPC framework configuration
- [class.is.ctrl](./class_is_ctrl) — Generic controller recognition
