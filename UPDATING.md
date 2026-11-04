# Updating the upstream version

phoenixd ships as a prebuilt Docker image from ACINQ; the package's `Dockerfile` builds on it, so the only pin to bump is the image tag.

## Determining the upstream version

- **phoenixd release** ([ACINQ/phoenixd](https://github.com/ACINQ/phoenixd)) — canonical version:

  ```
  gh release view -R ACINQ/phoenixd --json tagName -q .tagName
  ```

  GitHub release tags are prefixed with `v` (e.g. `v0.7.3`); strip the `v` when comparing against the pin below.

- **`acinq/phoenixd` Docker image** ([Docker Hub](https://hub.docker.com/r/acinq/phoenixd/tags)) — confirms the corresponding image tag has been published:

  ```
  curl -fsSL "https://hub.docker.com/v2/repositories/acinq/phoenixd/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

  The tag form used in the manifest is the unprefixed version (e.g. `0.7.3`). Pinned in `startos/manifest/index.ts` as the `IMAGE` build arg, `images.phoenixd.source.dockerBuild.buildArgs.IMAGE`.

## Applying the bump

- **`startos/manifest/index.ts`** — update `images.phoenixd.source.dockerBuild.buildArgs.IMAGE` from `acinq/phoenixd:<old>` to `acinq/phoenixd:<new>` (use the unprefixed version, matching Docker Hub).
