export const getLanguageFromLocale = (locale: string): string => {
  return locale.split('-')[0];
};

export const getCountryFromLocale = (locale: string): string => {
  return locale.split('-')[1];
};

export const isValidLocale = (locale: string): boolean => {
  return /^[a-z]{2}-[A-Z]{2}$/.test(locale);
};

export const formatLocale = (locale: string): string => {
  const language = new Intl.DisplayNames(['en'], { type: 'language' });
  const region = new Intl.DisplayNames(['en'], { type: 'region' });
  const [lang, country] = locale.split('-');

  return `${language.of(lang)} (${region.of(country)})`;
};

export const getLanguageName = (locale: string): string => {
  const language = new Intl.DisplayNames(['en'], { type: 'language' });
  return language.of(locale.split('-')[0]) || '';
};  

export const getCountryName = (locale: string): string => {
  const region = new Intl.DisplayNames(['en'], { type: 'region' });
  return region.of(locale.split('-')[1]) || '';
};