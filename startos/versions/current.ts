import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.2:4',
  releaseNotes: {
    en_US:
      'Services that depend on phoenixd now receive only its HTTP password, and can no longer read its seed or other files.',
    es_ES:
      'Los servicios que dependen de phoenixd ahora solo reciben su contraseña HTTP y ya no pueden leer su semilla ni sus demás archivos.',
    de_DE:
      'Dienste, die von phoenixd abhängen, erhalten jetzt nur noch dessen HTTP-Passwort und können seinen Seed und seine übrigen Dateien nicht mehr lesen.',
    pl_PL:
      'Usługi zależne od phoenixd otrzymują teraz tylko jego hasło HTTP i nie mogą już odczytać jego seeda ani innych plików.',
    fr_FR:
      'Les services qui dépendent de phoenixd ne reçoivent plus que son mot de passe HTTP et ne peuvent plus lire sa seed ni ses autres fichiers.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
