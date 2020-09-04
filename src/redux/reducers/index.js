import { combineReducers } from 'redux'

import { reducer as polyglotReducer } from "polyglot-react-redux-sdk";

import entities from './entities'
// import auth from './auth'
import services from './services'

export default combineReducers({
  polyglot: polyglotReducer,
  entities,
  // auth,
  services
})
