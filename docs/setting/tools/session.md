# `session`是提供的临时存储(v1.9.1+)

- 未指定分组时所有操作都在默认分组
- `session`是存储在内存当下,不可以跨项目读写
- 注意:`set(key,value)`中的`value`与`get(key)`得到的`value`是同一对象.

```groovy
def obj = ["a":"b"]
session.set("key",obj)
session.get("key")["a"]="c" //这里对get("key")得到的对象进行赋值不会影响到原始的obj
obj["a"] == "c" //obj已经被变更为了["a":"c"]
```


## 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| set(key,value) | void | 设置一个键值 | session.set("key","value")|
| set(group,key,value) | void | 设置一个键值(指定分组) | session.set("groupA","key","value")|
| get(key) | object | 获取一个设置的键值 | session.get("key")|
| get(group,key) | object | 获取一个设置的键值(指定分组) | session.get("groupA","key")|
| remove(key) | void | 删除一个设置的键值 | session.remove("key")|
| remove(group,key) | void | 删除一个设置的键值(指定分组) | session.remove("groupA","key")|
| clear() | void | 移除所有设置的键值(仅默认分组) | session.clear()|
| clear(group) | void | 移除所有设置的键值(指定分组) | session.clear("groupA")|
| keys() | array\<object> | 获取所有设置的键值(仅默认分组) | session.keys()|
| keys(group) | array\<object> | 获取所有设置的键值(指定分组) | session.keys("groupA")|