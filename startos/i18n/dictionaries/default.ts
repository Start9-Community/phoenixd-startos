export const DEFAULT_LANG = 'en_US'

const dict = {
  'Starting phoenixd!': 0,
  'primary daemon': 1,
  'The server is ready': 2,
  'The server is not ready': 3,
  'Server API': 4,
  'Your phoenixd server API': 5,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
