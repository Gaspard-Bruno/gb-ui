import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as polyglotReducer } from "polyglot-react-redux-sdk";

const rootReducer = combineReducers({
  polyglot: polyglotReducer,
});

const initializeStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default initializeStore();
