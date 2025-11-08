export type Locale = 'en' | 'hi';

type Messages = Record<string, string>;

const dictionaries: Record<Locale, Messages> = {
  en: {
    welcome: 'Welcome to AstroKalki'
  },
  hi: {
    welcome: 'AstroKalki में आपका स्वागत है'
  }
};

export async function getTranslations(locale: Locale): Promise<Messages> {
  return dictionaries[locale] ?? dictionaries.en;
}
