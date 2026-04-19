# postman.test

Set the Postman test script.

## Usage

```properties
class.postman.test=groovy:'''
// Verify response status
pm.test("Status code is 200", function() {
    pm.response.to.have.status(200)
})
'''
```
