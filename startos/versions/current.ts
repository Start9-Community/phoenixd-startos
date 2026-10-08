import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.2:0',
  releaseNotes: {
    en_US: `- Updates phoenixd to 0.9.2, which looks up every kind of outgoing payment by its id (on-chain splice-outs and channel closes included, not only Lightning payments) and updates lightning-kmp to 1.13.2.
- Set Chain Source and Set Liquidity Policy describe each of their options.`,
    es_ES: `- Actualiza phoenixd a 0.9.2, que busca cualquier tipo de pago saliente por su id (incluidos los splice-out en cadena y los cierres de canal, no solo los pagos Lightning) y actualiza lightning-kmp a 1.13.2.
- Establecer la fuente de la cadena y Establecer la política de liquidez describen cada una de sus opciones.`,
    de_DE: `- Aktualisiert phoenixd auf 0.9.2, das jede Art ausgehender Zahlung über ihre ID findet (auch On-Chain-Splice-outs und Kanalschließungen, nicht nur Lightning-Zahlungen), und aktualisiert lightning-kmp auf 1.13.2.
- Chain-Quelle setzen und Liquiditätsrichtlinie setzen beschreiben jede ihrer Optionen.`,
    pl_PL: `- Aktualizuje phoenixd do 0.9.2, który wyszukuje każdy rodzaj płatności wychodzącej po jej identyfikatorze (także splice-outy on-chain i zamknięcia kanałów, nie tylko płatności Lightning), oraz aktualizuje lightning-kmp do 1.13.2.
- Ustaw źródło łańcucha i Ustaw politykę płynności opisują każdą ze swoich opcji.`,
    fr_FR: `- Met à jour phoenixd vers 0.9.2, qui retrouve tout type de paiement sortant par son identifiant (y compris les splice-out on-chain et les fermetures de canal, et pas seulement les paiements Lightning), et met à jour lightning-kmp vers 1.13.2.
- Définir la source de la chaîne et Définir la politique de liquidité décrivent chacune de leurs options.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
