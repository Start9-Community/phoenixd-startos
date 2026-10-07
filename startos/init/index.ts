import { sdk } from '../sdk'
import { dependencies } from '../dependencies'
import { setInterfaces } from '../interfaces'
import { versionGraph } from '../versions'
import { actions } from '../actions'
import { restoreInit } from '../backups'
import { seedConfig } from './seedConfig'
import { watchApiPassword } from './watchApiPassword'
import { watchChainSource } from './watchChainSource'

export const init = sdk.setupInit(
  restoreInit,
  versionGraph,
  setInterfaces,
  actions,
  dependencies,
  seedConfig,
  watchApiPassword,
  watchChainSource,
)

export const uninit = sdk.setupUninit(versionGraph)
