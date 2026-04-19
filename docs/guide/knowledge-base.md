# Plugin Knowledge Base (AI)

This page provides a knowledge base for AI assistants to better understand and work with the EasyYapi plugin.

## What is EasyYapi?

EasyYapi is an IntelliJ IDEA plugin that generates API documentation from Java/Kotlin source code based on Javadoc, KDoc, and ScalaDoc comments.

## Key Concepts

- **Configuration Rules**: Key-value pairs that customize documentation generation behavior
- **Groovy Scripts**: Advanced customization using Groovy scripting language
- **Parse Events**: Callbacks that execute at specific points during the parsing process
- **Script Tools**: Built-in utilities available in Groovy scripts

## Common Workflows

1. Install the plugin from JetBrains Marketplace
2. Add Javadoc/KDoc comments to your code
3. Configure rules in `.easy.api.config` files
4. Export documentation to YApi, Postman, or Markdown

## Configuration File Location

- Project root: `.easy.api.config`
- Module root: `.easy.api.config`
- Remote: configured via `remote.url`
