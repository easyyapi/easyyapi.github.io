# class.is.grpc

判断类是否为 gRPC 服务实现类。

## 用法

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.stub.AbstractStub")
```

此规则用于识别 gRPC 服务类。启用 gRPC 框架支持后，继承 gRPC 存根或实现 gRPC 服务接口的类将被视为 API 端点。

## 另见

- [class.is.ctrl](./class_is_ctrl) — 通用控制器识别
