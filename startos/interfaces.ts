import { sdk } from './sdk'
import { port } from './utils'
import { i18n } from './i18n'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const apiMulti = sdk.MultiHost.of(effects, 'api-multi')
  const apiMultiOrigin = await apiMulti.bindPort(port, {
    protocol: 'http',
  })
  const api = sdk.createInterface(effects, {
    name: i18n('Server API'),
    id: 'api',
    description: i18n('Your phoenixd server API'),
    type: 'api',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  const apiReceipt = await apiMultiOrigin.export([api])

  return [apiReceipt]
})
