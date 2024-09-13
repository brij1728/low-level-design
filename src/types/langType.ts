export interface LanguageData {
  title: string;
  desc: string;
  title2: string;
  title3: string;
}

export interface LANGType {
  en: LanguageData;
  hi: LanguageData;
  sp: LanguageData;
  ru: LanguageData;
}

export type LANGKeyType = keyof LANGType; 
