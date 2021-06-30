# `logger`是提供的日志工具类

可以打印日志到控制台, 受[日志级别设置](../ide-setting.md#Common)影响, 部分级别的日志可能不会显示

---

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| log(str) | void | 打印日志 | logger.log("some log")| 
| trace(str) | void | 打印日志(日志级别trace) | logger.trace("some log")| 
| debug(str) | void | 打印日志(日志级别debug) | logger.debug("some log")| 
| info(str) | void | 打印日志(日志级别info) | logger.info("some log")| 
| warn(str) | void | 打印日志(日志级别warn) | logger.warn("some log")| 
| error(str) | void | 打印日志(日志级别error) | logger.error("some log")| 
