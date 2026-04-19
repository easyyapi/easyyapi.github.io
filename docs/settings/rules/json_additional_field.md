# json.additional.field

Add additional fields to the JSON output.

## Usage

```properties
json.additional.field=groovy:'''
if (it.type().name() == "com.example.Result") {
    it.addAdditionalField("timestamp", "long", System.currentTimeMillis())
}
'''
```
