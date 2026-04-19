# Export Method Doc

EasyYapi can export documentation for regular Java methods (not just HTTP APIs). This is useful for documenting service methods, utility methods, and other non-HTTP endpoints.

## Usage

1. Open a file containing the methods you want to document
2. Use shortcut `Alt + Shift + E` (Windows/Linux) or `Ctrl + E` (macOS)
3. Select the methods to export
4. Choose the export channel and complete the export

## Configuration

Use the following rules to customize method documentation:

- [mdoc.class.filter](/settings/rules/mdoc_class_filter) — Filter which classes to include
- [mdoc.method.filter](/settings/rules/mdoc_method_filter) — Filter which methods to include
- [mdoc.method.path](/settings/rules/mdoc_method_path) — Set the method documentation path
- [mdoc.method.http.method](/settings/rules/mdoc_method_http_method) — Set the HTTP method for method documentation
