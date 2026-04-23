# Call API

EasyYapi supports sending API requests directly from IDEA for quick testing and debugging.

## Usage

1. Open a file containing APIs in your project
2. Click the gutter icon (▶) next to an API method to open it in the API Dashboard
3. Configure request parameters (host, headers, body, etc.)
4. Click **Send** to execute the request

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

EasyYapi also supports calling gRPC methods directly from the IDE. This feature is disabled by default; enable it in IDE settings:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>gRPC</kbd>

Check the **Enable gRPC call** checkbox to enable gRPC call support.

When gRPC call is enabled, the plugin needs gRPC runtime JARs to invoke methods. You can configure the runtime dependencies via:

- **IDE Settings**: Use the **Auto Detect** button in <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > gRPC Runtime to automatically detect and resolve dependencies.

See [gRPC Framework Support](/framework/grpc) for more details on gRPC configuration.

## Gutter Icon Navigation

EasyYapi adds a gutter icon (▶) next to API methods in the editor. Clicking this icon opens the **API Dashboard** and navigates directly to the corresponding endpoint.

### Supported Annotations

The gutter icon appears on methods annotated with:

| Framework | Annotations |
|-----------|------------|
| Spring MVC | `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, `@PatchMapping` |
| JAX-RS | `@GET`, `@POST`, `@PUT`, `@DELETE`, `@PATCH`, `@Path` |
| gRPC | RPC methods in classes extending `BindableService` or annotated with `@GrpcService` |

### Auto Re-scan

If the endpoint is not found in the current index (e.g., after a branch switch or when the file is new), clicking the gutter icon automatically triggers a re-scan of the containing file before navigating to the dashboard.

## API Dashboard

EasyYapi provides an **API Dashboard** tool window for browsing, testing, and managing API endpoints. Open it from the bottom tool window bar in IDEA.

### Browsing Endpoints

The dashboard displays all detected API endpoints in a tree view organized by module and class:

- **Color-coded methods**: HTTP methods are color-coded (GET=blue, POST=green, PUT=orange, DELETE=red, PATCH=cyan) and gRPC endpoints are shown in purple with streaming type indicators (`gRPC:U` for Unary, `gRPC:S` for Server Streaming, `gRPC:C` for Client Streaming, `gRPC:B` for Bidirectional)
- **Search**: Type in the search field to filter endpoints by name, path, folder, description, or class name (case-insensitive, with debounced input)
- **Toolbar actions**: Refresh, Export, Collapse All, Expand All

### Endpoint Details

Selecting an endpoint in the tree opens the details panel on the right, which includes:

- **Request line**: HTTP method, host URL (with history), path, Send and Reset buttons
- **Tabbed parameter editor**:
  - **Path** — Path parameters (e.g., `/users/{id}`)
  - **Params** — Query string and cookie parameters
  - **Headers** — Request headers
  - **Form** — Form data parameters (for `application/x-www-form-urlencoded` or `multipart/form-data`)
  - **Body** — JSON request body (with syntax highlighting)
- **Response panel**: Status code, response body (with Pretty/Raw JSON toggle and Copy button), and response headers

### Sending Requests

1. Select an endpoint in the tree
2. Configure the host, parameters, headers, and body as needed
3. Click **Send** to execute the request
4. View the response in the panel below

For gRPC endpoints, the dashboard checks that gRPC call is enabled and runtime dependencies are available before sending. If not configured, it prompts you to open the settings.

### Context Menu

Right-click on endpoints or folders in the tree to access:

| Action | Description |
|--------|-------------|
| **Export** | Export selected endpoints to Markdown, YApi, Postman, cURL, or HttpClient |
| **Copy Path** | Copy the endpoint path to clipboard |
| **Copy as cURL** | Copy a cURL command for the endpoint to clipboard |
| **Navigate to Source** | Jump to the source code of the endpoint |
| **Reset to Default** | Reset any user modifications to the default values |

Double-click an endpoint to navigate directly to its source code.

### Auto-save

User modifications to request parameters, headers, host, and body are automatically saved and restored when you revisit the same endpoint.
