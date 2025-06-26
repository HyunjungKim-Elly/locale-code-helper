# locale-code-helper

A lightweight TypeScript utility to extract language and country codes from IETF locale strings like `en-US`, `fr-CA`, etc.

- ✅ Zero dependencies  
- ✅ Fully typed (TypeScript)  
- ✅ ES Modules support only  

---

## 📦 Installation

```bash
npm install locale-code-helper
```

> ℹ️ This package uses native ES Modules.  
> Ensure your `package.json` includes `"type": "module"`.

---

## 🚀 Usage

```ts
import {
  getLanguageFromLocale,
  getCountryFromLocale,
  isValidLocale,
  formatLocale,
  getLanguageName,
  getCountryName,
} from 'locale-code-helper';

getLanguageFromLocale('en-US'); // "en"
getCountryFromLocale('en-US');  // "US"
isValidLocale('ko-KR');         // true
formatLocale('fr-FR');          // "French (France)"
getLanguageName('ja-JP');       // "Japanese"
getCountryName('ja-JP');        // "Japan"
```

---

## 🔧 API

### `getLanguageFromLocale(locale: string): string`

Extracts the **language code** from a locale string.  
Example: `"en-US"` → `"en"`

---

### `getCountryFromLocale(locale: string): string`

Extracts the **country/region code** from a locale string.  
Example: `"en-US"` → `"US"`

---

### `isValidLocale(locale: string): boolean`

Returns `true` if the input string is a valid BCP 47 locale  
(e.g., `"en"`, `"en-US"`, `"ko-KR"`), otherwise `false`.

---

### `formatLocale(locale: string): string`

Returns a **formatted name** combining language and country.  
Example: `"fr-FR"` → `"French (France)"`

---

### `getLanguageName(locale: string): string`

Returns the **full name of the language** based on the given locale.  
Example: `"ja-JP"` → `"Japanese"`

---

### `getCountryName(locale: string): string`

Returns the **full name of the country or region** based on the given locale.  
Example: `"ja-JP"` → `"Japan"`

---

## 📄 License

MIT © 2025 Hyunjung Kim