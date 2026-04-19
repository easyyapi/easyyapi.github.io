# method.additional.header

Add additional headers to a method.

## Usage

```properties
method.additional.header=groovy:'''
header("Authorization", "Bearer ${token}")
header("X-Request-Id", UUID.randomUUID().toString())
'''
```
