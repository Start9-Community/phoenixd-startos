<p align="center">
  <img src="icon.svg" alt="Project Logo" width="21%">
</p>

# phoenixd for StartOS

This repository packages [phoenixd](https://github.com/ACINQ/phoenixd) for StartOS. This document describes what makes this package different from a default phoenixd deployment.

For general phoenixd usage and features, see the [upstream documentation](https://phoenix.acinq.co/server).

## How This Differs from Upstream

This package runs phoenixd with minimal configuration. The server connects to ACINQ's Lightning infrastructure (LSP) for channel management and liquidity. All configuration and wallet interaction is done through the HTTP API.

## Container Runtime

This package runs **1 container**:

| Container | Image | Purpose |
|-----------|-------|---------|
| phoenixd | `acinq/phoenixd:0.7.2` | Lightning wallet server |

## Volumes

| Volume | Contents | Backed Up |
|--------|----------|-----------|
| `main` | Wallet data, seed, channels, database | Yes |

Mounted at `/phoenix/.phoenix` inside the container.

**Important:** The `main` volume contains your Lightning wallet seed and funds. Ensure backups are secure.

## Configuration Management

### Auto-Configured Settings

None. phoenixd runs with default settings connecting to ACINQ's LSP.

### User-Configurable Settings

Configuration is done via the HTTP API or by editing config files directly in the data directory. No StartOS actions are provided for configuration.

## Network Interfaces

| Interface | Type | Port | Description |
|-----------|------|------|-------------|
| Server API | api | 9740 | HTTP API for wallet operations |

The API requires authentication using the HTTP password generated on first run (found in `phoenix.conf`).

## Actions

None. All interaction is through the HTTP API.

## Dependencies

None. phoenixd connects directly to ACINQ's Lightning Service Provider (LSP) for:
- Channel management
- Liquidity provisioning
- Routing

No local Bitcoin node is required.

## Backups

All data is backed up:
- `main` volume - wallet seed, channel state, transaction history

**Critical:** Your Lightning funds depend on this backup. The seed phrase allows recovery, but channel state is also important for fund safety.

## Health Checks

| Check | Method | Success Condition |
|-------|--------|-------------------|
| Primary daemon | Port listening | Port 9740 responds |

## Limitations

1. **ACINQ dependency**: Requires connection to ACINQ's LSP; cannot use arbitrary Lightning peers
2. **No local Bitcoin node**: Relies on ACINQ infrastructure for blockchain data
3. **No web UI**: API-only interface; requires external tools or custom integration
4. **Liquidity fees**: ACINQ charges fees for channel liquidity and on-chain operations

## What's Unchanged

- Full phoenixd API functionality
- Self-custody of funds (you control the seed)
- Send and receive Lightning payments
- BOLT11 and BOLT12 invoice support
- Webhook notifications
- Multi-account support

---

## Quick Reference (YAML)

```yaml
package_id: phoenixd
upstream_version: 0.7.2
containers:
  - name: phoenixd
    image: acinq/phoenixd:0.7.2

volumes:
  main:
    backup: true
    mountpoint: /phoenix/.phoenix
    contains: wallet seed, channels, database

interfaces:
  api:
    type: api
    port: 9740
    auth: HTTP password (in phoenix.conf)

actions: []

dependencies: []

health_checks:
  - name: Primary daemon
    method: port_listening
    port: 9740

not_available:
  - web_ui
  - local_bitcoin_node
  - custom_lsp
```
