import i18n from 'i18next';

import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionTypes } from "./action";
export interface LanguageState {
  language: string,
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

const reducer = (state = defaultState, action: LanguageActionTypes) => {
  //??? const { type, payload } = action
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return { ...state, languageList: [...state.languageList, action.payload] }
    default:
      return state
  }
}
export default reducer