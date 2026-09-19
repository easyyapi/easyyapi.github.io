# Call API

EasyYapi supports sending API requests directly from IDEA for quick testing and debugging.

## Usage

1. Open a file containing APIs in your project
2. Click the gutter icon (▶) next to an API method to open it in the API Explorer
3. Configure request parameters (host, headers, body, etc.)
4. Click **Send** to execute the request

## Configuration

### Pre-request Callback

Use `http.call.before` to execute custom logic before sending a request:

````properties
http.call.before=groovy:```
logger.info("Sending " + request.method() + " " + request.url())
```
````

### Post-request Callback

Use `http.call.after` to execute custom logic after receiving a response:

````properties
http.call.after=groovy:```
if (response.code() == 200) {
    def body = new JsonSlurper().parseText(response.body())
    if (body.token) {
        localStorage.set("token", body.token)
    }
}
```
````

See [http.call.before](/settings/rules/http_call_before) and [http.call.after](/settings/rules/http_call_after) for more details.

## gRPC Call

EasyYapi also supports calling gRPC methods directly from the IDE. This feature is disabled by default; enable it in IDE settings:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>gRPC</kbd>

Check the **Enable gRPC call** checkbox to enable gRPC call support.

When gRPC call is enabled, the plugin needs gRPC runtime JARs to invoke methods. You can configure the runtime dependencies via:

- **IDE Settings**: Use the **Auto Detect** button in <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > gRPC Runtime to automatically detect and resolve dependencies.

See [gRPC Framework Support](/framework/grpc) for more details on gRPC configuration.

## Gutter Icon Navigation

EasyYapi adds a gutter icon (▶) next to API methods in the editor. Clicking this icon opens the **API Explorer** and navigates directly to the corresponding endpoint.

### Supported Annotations

The gutter icon appears on methods annotated with:

| Framework | Annotations |
|-----------|------------|
| Spring MVC | `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, `@PatchMapping` |
| JAX-RS | `@GET`, `@POST`, `@PUT`, `@DELETE`, `@PATCH`, `@Path` |
| gRPC | RPC methods in classes extending `BindableService` or annotated with `@GrpcService` |

### Auto Re-scan

If the endpoint is not found in the current index (e.g., after a branch switch or when the file is new), clicking the gutter icon automatically triggers a re-scan of the containing file before navigating to the explorer.

## API Explorer

EasyYapi provides an **API Explorer** tool window for browsing, testing, and managing API endpoints. Open it from the bottom tool window bar in IDEA.

### Browsing Endpoints

The explorer displays all detected API endpoints in a tree view organized by module and class:

- **Color-coded methods**: HTTP methods are color-coded (GET=blue, POST=green, PUT=orange, DELETE=red, PATCH=cyan) and gRPC endpoints are shown in purple with streaming type indicators (`gRPC:U` for Unary, `gRPC:S` for Server Streaming, `gRPC:C` for Client Streaming, `gRPC:B` for Bidirectional)
- **Search**: Type in the search field to filter endpoints by address, name, path, folder, description, or class name (case-insensitive, with debounced input)
- **Toolbar actions**: Refresh, Export, Collapse All, Expand All

#### What the search box accepts

The explorer's search bar and **Search Everywhere** share one matcher, so both accept the same query grammar:

- One query can combine the **address and the name** — `user 用户` matches `/api/user/get` whose name is `获取用户信息`
- **Fuzzy matching**: `aus用户` matches `/api/user/get` as a subsequence
- Tokens shorter than three characters must match literally, so a two-letter query does not return almost every endpoint
- A pasted path is never fuzzed: it stays a precise statement, which keeps a shortened URL working
- A **method prefix** (`GET /users`) filters by HTTP verb, and path templates match concrete values (`/api/users/42` finds `/api/users/{id}`)
- Results are ordered by score, so a literal path hit comes before a fuzzy one

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

#### Binary responses

File responses (`octet-stream`, images, PDF, ZIP, …) are no longer decoded as text. The explorer shows them as a metadata summary with a **Save as** action so the original bytes survive:

| Response kind | What you see |
|---------------|--------------|
| Text (JSON, XML, HTML…) | Body tab with the Pretty/Raw toggle. Bodies larger than 500,000 characters are truncated for display. |
| Binary | Content type, size and a **Save as** button — the bytes are streamed to a temp file, never rendered as text. |

In scripts the same distinction is exposed on the response object:

| Method | Description |
|--------|-------------|
| `response.bytes()` | Raw response bytes; `null` for a text response |
| `response.saveBody(path)` | Write the body to `path`; returns `false` when there is nothing to save |
| `pm.response.responseSize` | Body size **in bytes** (it used to report characters) |

### Sending Requests

1. Select an endpoint in the tree
2. Configure the host, parameters, headers, and body as needed
3. Click **Send** to execute the request
4. View the response in the panel below

For gRPC endpoints, the explorer checks that gRPC call is enabled and runtime dependencies are available before sending. If not configured, it prompts you to open the settings.

### Context Menu

Right-click on endpoints or folders in the tree to access:

| Action | Description |
|--------|-------------|
| **Export** | Export selected endpoints to Markdown, YApi, Postman, cURL, HttpClient, Hoppscotch, OpenAPI, or ApiPost |
| **Copy API URL** | Copy the address of each selected endpoint, one per line, as `METHOD /path` |
| **Copy Path** | Copy the endpoint path to clipboard |
| **Copy as cURL** | Copy a cURL command for the endpoint to clipboard |
| **Navigate to Source** | Jump to the source code of the endpoint |
| **Reset to Default** | Reset any user modifications to the default values |

Double-click an endpoint to navigate directly to its source code.

**Copy API URL** copies the *address*, not just the path — `GET /api/user/get` rather than `/api/user/get`. The HTTP method is included because a path alone cannot distinguish `GET /user/{id}` from `PUT /user/{id}`. It resolves through the same entry point every export action uses, so a copied address always matches what an export of the same selection would contain. No host is added: the host is a deployment concern that the environment selector resolves. It can be turned off in **Features** (`Copy API URL`).

### Search Everywhere

Use IntelliJ's **Search Everywhere** (double-press `Shift`) to find endpoints across the project. They appear under their own **APIs** tab and also in **All**, and accept every form listed in [What the search box accepts](#what-the-search-box-accepts) above. Clicking a result navigates to the source method.

The **APIs** tab can be turned off in **Features** (`Search Everywhere`). It keeps reading the retained API index — which an explorer **Refresh** refills — so it still works even while API Scanning is off.

### Postman Environment Sync

Environments can be synchronized **bidirectionally** between EasyYapi and Postman, so a host or token defined once is available in both places.

Sync lives on the environment selector inside the explorer:

- Click the **Sync ▼** button in the inline environment panel, or right-click the environment dropdown and choose an action from the menu
- **Push to Postman** — push the current project environment and its variables to Postman
- **Pull from Postman** — pull a Postman environment into the project (the local environment list refreshes afterwards)

Both actions require a **Postman API token** configured in settings; until then the sync actions stay disabled. When pulling an environment whose name already exists locally, you resolve the conflict:

| Strategy | Behavior |
|----------|----------|
| **Replace** | Local variables are replaced by the Postman values |
| **Merge** | Postman values win for keys present in both; local-only keys are kept |
| **Skip** | Leave the local environment untouched |

### Auto-save

User modifications to request parameters, headers, host, and body are automatically saved and restored when you revisit the same endpoint. **Reset to Default** discards them and re-reads the values from the source, so fields newly added to a DTO appear again.
