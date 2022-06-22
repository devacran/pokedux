import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "./middelwares/logger";
import { pokemonReducer } from "./reducers/pokemon";
const middlewareEnhancer = applyMiddleware(thunk, logger);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    pokemonReducer,
    initialState,
    composeEnhancers(middlewareEnhancer)
  );
}
