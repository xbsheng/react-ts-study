export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const ADD_LANGUAGE = 'ADD_LANGUAGE'

export type LanguageCode = string

export interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE, // typeof CHANGE_LANGUAGE
  payload: LanguageCode
}
export interface AddLanguageAction {
  type: typeof ADD_LANGUAGE, // typeof ADD_LANGUAGE
  payload: {
    name: string,
    code: string
  }
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction

export const changeLanguageAction = (payload: LanguageCode): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload
  }
}

