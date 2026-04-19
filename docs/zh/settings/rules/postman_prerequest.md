# postman.prerequest

Set the Postman pre-request script.

## Usage

```properties
class.postman.prerequest=groovy:'''
// Add authorization header
it.header("Authorization", "Bearer " + localStorage.get("token"))
'''
```
