export const EAppPage = {
    CHARACTERS: 'CHARACTERS',
    SPELLS: 'SPELLS',
    ROOT: 'ROOT',
  } as const;
  
  export type EAppPage = (typeof EAppPage)[keyof typeof EAppPage];
  
  export const APP_LINK_URLS = {
    [EAppPage.CHARACTERS]: '/characters',
    [EAppPage.SPELLS]: '/spells',
    [EAppPage.ROOT]: '/',
  };