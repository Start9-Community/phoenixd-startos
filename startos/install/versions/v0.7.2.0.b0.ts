import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_7_2_0_b0 = VersionInfo.of({
  version: '0.7.2:0-beta.0',
  releaseNotes: {
    en_US: 'Revamped for StartOS 0.4.0',
    es_ES: 'Renovado para StartOS 0.4.0',
    de_DE: 'Überarbeitet für StartOS 0.4.0',
    pl_PL: 'Przebudowany dla StartOS 0.4.0',
    fr_FR: 'Remanié pour StartOS 0.4.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
