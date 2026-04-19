# class.is.grpc

判断类是否为 gRPC 服务实现类。

## 默认识别

默认情况下，无需此规则即可识别 gRPC 服务，条件为：

- 继承 `io.grpc.BindableService`（或生成的 `ImplBase` 父类）
- 标注了 `@GrpcService` 注解（来自 `net.devh.boot.grpc.server.service.GrpcService`）

## 用法

使用此规则覆盖或扩展默认的 gRPC 服务识别：

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService")
```

当此规则对某个类求值为 `true` 时，该类将被视为 gRPC 服务，而不管默认检测逻辑如何。

## 另见

- [gRPC 框架支持](/zh/framework/grpc) — gRPC 框架配置
- [class.is.ctrl](./class_is_ctrl) — 通用控制器识别
