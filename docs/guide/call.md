# Call API

EasyYapi supports sending API requests directly from IDEA for quick testing and debugging.

## Usage

1. Open a file containing APIs in your project
2. Right-click on the file content and select `Call`
3. Configure request parameters in the popup panel
4. Click the send button to make the request

## Configuration

### Pre-request Callback

Use `http.call.before` to execute custom logic before sending a request:

```properties
http.call.before=groovy:'''
it.header("Authorization", "Bearer " + localStorage.get("token"))
'''
```

### Post-request Callback

Use `http.call.after` to execute custom logic after receiving a response:

```properties
http.call.after=groovy:'''
if (it.response().code() == 200) {
    def body = it.response().body()
    localStorage.set("token", body.token)
}
'''
```

See [http.call.before](/settings/rules/http_call_before) and [http.call.after](/settings/rules/http_call_after) for more details.
