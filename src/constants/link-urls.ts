export const AppPage = {
  CHARACTERS: 'CHARACTERS',
  SPELLS: 'SPELLS',
  ROOT: 'ROOT',
} as const

export type AppPage = (typeof AppPage)[keyof typeof AppPage]

export const APP_LINK_URLS: Record<AppPage, string> = {
  [AppPage.CHARACTERS]: '/characters',
  [AppPage.SPELLS]: '/spells',
  [AppPage.ROOT]: '/',
}