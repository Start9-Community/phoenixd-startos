import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.2:4',
  releaseNotes: {
    en_US:
      'Enables dependent services to access the HTTP password without access to the wallet seed. Each dependent service must also be updated to use this protection; updating phoenixd alone does not remove existing access.',
    es_ES:
      'Permite que los servicios dependientes accedan a la contraseña HTTP sin acceso a la semilla de la cartera. Cada servicio dependiente también debe actualizarse para usar esta protección; actualizar solo phoenixd no elimina el acceso existente.',
    de_DE:
      'Ermöglicht abhängigen Diensten den Zugriff auf das HTTP-Passwort ohne Zugriff auf den Wallet-Seed. Jeder abhängige Dienst muss ebenfalls aktualisiert werden, um diesen Schutz zu nutzen; ein Update von phoenixd allein entfernt bestehende Zugriffe nicht.',
    pl_PL:
      'Umożliwia usługom zależnym dostęp do hasła HTTP bez dostępu do seeda portfela. Każda usługa zależna wymaga również aktualizacji, aby korzystać z tej ochrony; sama aktualizacja phoenixd nie odbiera istniejącego dostępu.',
    fr_FR:
      'Permet aux services dépendants d’accéder au mot de passe HTTP sans accès à la graine du portefeuille. Chaque service dépendant doit également être mis à jour pour utiliser cette protection ; la mise à jour de phoenixd seule ne supprime pas les accès existants.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
