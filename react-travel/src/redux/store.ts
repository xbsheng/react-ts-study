import { createStore } from 'redux'

import languageReducer from './language/reducer'

const store = createStore(languageReducer)

export default store