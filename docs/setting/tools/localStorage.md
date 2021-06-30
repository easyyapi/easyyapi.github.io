# `localStorage`是提供的本地存储(v1.9.1+)

- 未指定分组时所有操作都在默认分组
- `localStorage`默认是存储在用户根目录下,可以跨项目读写,如果需要仅在当前项目读写,所有的操作都需要指定一个group.
- 注意:`set(key,value)`中的`value`与`get(key)`得到的`value`并非同一对象.

```groovy
def obj = ["a":"b"]
localStorage.set("key",obj)
localStorage.get("key")["a"]=c //这里对get("key")得到的对象进行赋值不会影响到原始的obj
obj["a"] == "b" //obj还是["a":"b"]
```


## 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| set(key,value) | void | 设置一个键值 | localStorage.set("key","value")|
| set(group,key,value) | void | 设置一个键值(指定分组) | localStorage.set("groupA","key","value")|
| get(key) | object | 获取一个设置的键值 | localStorage.get("key")|
| get(group,key) | object | 获取一个设置的键值(指定分组) | localStorage.get("groupA","key")|
| remove(key) | void | 删除一个设置的键值 | localStorage.remove("key")|
| remove(group,key) | void | 删除一个设置的键值(指定分组) | localStorage.remove("groupA","key")|
| clear() | void | 移除所有设置的键值(仅默认分组) | localStorage.clear()|
| clear(group) | void | 移除所有设置的键值(指定分组) | localStorage.clear("groupA")|
| keys() | array\<object> | 获取所有设置的键值(仅默认分组) | localStorage.keys()|
| keys(group) | array\<object> | 获取所有设置的键值(指定分组) | localStorage.keys("groupA")|