import { setupManifest } from '@start9labs/start-sdk'
import i18n from './i18n'

export const manifest = setupManifest({
  id: 'phoenixd',
  title: 'phoenixd',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/phoenixd-startos/',
  upstreamRepo: 'https://github.com/ACINQ/phoenixd/',
  supportSite: 'https://github.com/ACINQ/phoenixd/issues/',
  marketingSite: 'https://phoenix.acinq.co/server/',
  donationUrl: null,
  docsUrl:
    'https://github.com/Start9Labs/phoenixd-startos/blob/master/instructions.md',
  description: i18n.description,
  volumes: ['main'],
  images: {
    phoenixd: {
      source: { dockerTag: 'acinq/phoenixd:0.7.1' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
