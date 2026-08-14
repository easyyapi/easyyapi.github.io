# method.additional.header

Add additional headers to a method.

## Usage

````properties
method.additional.header=groovy:```
header("Authorization", "Bearer ${token}")
header("X-Request-Id", UUID.randomUUID().toString())
```
````

## Scoped example

```properties
# Add Authorization header to all controllers in a package except AuthController
method.additional.header[groovy: it.containingClass()?.qualifiedName().startsWith("com.example.merchant.") && it.containingClass()?.qualifiedName() != "com.example.merchant.AuthController"]={"name":"Authorization","value":"Bearer ${token}","desc":"JWT","required":true}
```
