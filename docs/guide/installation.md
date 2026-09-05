# Installation

## Supported IDEs

| Build | IDE compatibility | Support level |
|-------|-------------------|---------------|
| Default (Marketplace) | IntelliJ IDEA 2025.2+ (Ultimate & Community Edition) | Officially supported |
| Compatibility build | IntelliJ IDEA 2022.1 – 2025.1 | Best-effort, not verified |

Only the default build is published to the JetBrains Marketplace. If you are on an older IDEA version, download the **compatibility build** from [GitHub Releases](https://github.com/tangcent/easy-yapi/releases) — every release attaches an additional best-effort package covering IDEA 2022.1 through 2025.1, and the release notes' Downloads table lists the exact IDE range of each zip.

You can also build a package for a custom range with `script/package.sh`:

```bash
./script/package.sh              # default: 2025.2+, unbounded (what ships to Marketplace)
./script/package.sh '221-*'      # 2022.1 and newer, unbounded
./script/package.sh 221-251      # 2022.1 through 2025.1
```

Compatibility outside the default range is best-effort: the package is compiled against the newest platform and is not verified on older IDEs.

::: tip Reading the version number
Plugin versions embed the IDE range as `<base>.<since>.<until>` — e.g. `3.2.4.252.0` is the default 3.2.4 build for IDEA 2025.2 (build `252`) and newer, while `3.2.4.221.251` is the compatibility build for IDEA 2022.1 (`221`) through 2025.1 (`251`). A `0` means unbounded.
:::

## Install from JetBrains Marketplace

1. Open <kbd>Settings</kbd> > <kbd>Plugins</kbd> > <kbd>Marketplace</kbd>
2. Search for **"EasyYapi"**
3. Click <kbd>Install</kbd>

<iframe frameborder="none" width="245px" height="48px" src="https://plugins.jetbrains.com/embeddable/install/12458"></iframe>

## Manual Installation

1. Download the plugin from [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/12458-easyyapi) or [GitHub Releases](https://github.com/tangcent/easy-yapi/releases)
2. Open <kbd>Settings</kbd> > <kbd>Plugins</kbd> > <kbd>⚙️</kbd> > <kbd>Install Plugin from Disk...</kbd>
3. Select the downloaded plugin file

Restart the IDE after installation.
