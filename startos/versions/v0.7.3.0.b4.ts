import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_7_3_0_b4 = VersionInfo.of({
  version: '0.7.3:0-beta.4',
  releaseNotes: {
    en_US: 'Update to upstream phoenixd 0.7.3',
    es_ES: 'Actualización a phoenixd upstream 0.7.3',
    de_DE: 'Update auf upstream phoenixd 0.7.3',
    pl_PL: 'Aktualizacja do upstream phoenixd 0.7.3',
    fr_FR: 'Mise à jour vers phoenixd upstream 0.7.3',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
