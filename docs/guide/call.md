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

## gRPC Call

EasyYapi also supports calling gRPC methods directly from the IDE. This feature is disabled by default; enable it in your configuration:

```properties
grpc.call.enabled=true
```

When gRPC call is enabled, the plugin needs gRPC runtime JARs to invoke methods. You can configure the runtime dependencies via:

- **IDE Settings**: Use the **Auto Detect** button in <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > gRPC Runtime to automatically detect and resolve dependencies.
- **Config file**: Use `grpc.artifact.configs`, `grpc.additional.jars`, and `grpc.repositories` properties.

See [gRPC Framework Support](/framework/grpc) for more details on gRPC configuration.

## API Dashboard

EasyYapi provides an API Dashboard tool window for quick access to API testing and management. The dashboard can be opened from the bottom tool window bar in IDEA.

The API Dashboard allows you to:

- Browse all detected APIs in the current project
- Quickly call any API with auto-filled parameters
- View response data in a structured format
