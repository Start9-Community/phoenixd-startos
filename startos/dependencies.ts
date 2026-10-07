import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'
import { Indexer, indexers } from './utils'
import { storeJson } from './fileModels/store.json'
import { electrsDescription, fulcrumDescription } from './manifest/i18n'

const selected = async (effects: T.Effects, indexer: Indexer) =>
  (await storeJson.read((s) => s.chainSource).const(effects)) === indexer

const electrs = sdk.Dependency.optional('electrs', {
  description: electrsDescription,
  metadata: {
    title: 'Electrs',
    icon: 'https://raw.githubusercontent.com/Start9Labs/electrs-startos/refs/heads/master/icon.svg',
  },
  versionRange: indexers.electrs.versionRange,
  kind: 'running',
  healthChecks: indexers.electrs.healthChecks,
  enabled: ({ effects }) => selected(effects, 'electrs'),
})

const fulcrum = sdk.Dependency.optional('fulcrum', {
  description: fulcrumDescription,
  metadata: {
    title: 'Fulcrum',
    icon: 'https://raw.githubusercontent.com/Start9Labs/fulcrum-startos/master/icon.png',
  },
  versionRange: indexers.fulcrum.versionRange,
  kind: 'running',
  healthChecks: indexers.fulcrum.healthChecks,
  enabled: ({ effects }) => selected(effects, 'fulcrum'),
})

export const dependencies = sdk.Dependencies.of()
  .addDependency(electrs)
  .addDependency(fulcrum)
