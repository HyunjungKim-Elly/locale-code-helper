export const getLanguageFromLocale = (locale: string): string => {
  return locale.split('-')[0];
};

export const getCountryFromLocale = (locale: string): string => {
  return locale.split('-')[1];
};

export const isValidLocale = (locale: string): boolean => {
  return /^[a-z]{2}-[A-Z]{2}$/.test(locale);
};