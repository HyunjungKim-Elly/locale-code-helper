// test.ts
import {
  getLanguageFromLocale,
  getCountryFromLocale,
    isValidLocale,
  formatLocale,
  getLanguageName,
  getCountryName,
} from './src/index' // 또는 네가 export한 경로

const testLocales = ['en-US', 'ko-KR', 'ja-JP', 'fr-FR'];

for (const locale of testLocales) {
  console.log('==============');
  console.log('Input Locale:', locale);
  console.log('✔ Valid?:', isValidLocale(locale));
  console.log('🔤 Language Code:', getLanguageFromLocale(locale));
  console.log('🏳 Country Code:', getCountryFromLocale(locale));
  console.log('🌐 Formatted Locale:', formatLocale(locale));
  console.log('🔤 Language Name:', getLanguageName(locale));
  console.log('🏳 Country Name:', getCountryName(locale));
}