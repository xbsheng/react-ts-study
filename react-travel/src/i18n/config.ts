import i18n from 'i18next'

import { initReactI18next } from "react-i18next";

import translation_zh from './language/zh.json'
import translation_en from './language/en.json'

const resources = {
  zh: {
    translation: translation_zh
  },
  en: {
    translation: translation_en
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    // keySeparator: false, // we do not use keys in form messages.welcome
    // header.slogan
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
