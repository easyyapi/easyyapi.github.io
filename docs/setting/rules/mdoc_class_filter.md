# mdoc.class.filter

- 用于选择哪些类可以导出方法(rpc)文档, 根据当前项目情况


***Demo***
 
 - 如果所有的RPC接口类都以`Client`结尾, 则可配置:
 
 ```properties
 mdoc.class.filter=groovy:it.name().endsWith("Client")
 ```

 - 如果所有的RPC接口类包都在`a.b.c.client`, 则可配置:
 
 ```properties
 mdoc.class.filter=groovy:it.name().startsWith("a.b.c.client")
 ```