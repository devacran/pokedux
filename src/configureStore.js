import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import logger from "./middelwares/logger";
import { pokemonReducer } from "./reducers/pokemon";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware, thunk, logger);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    pokemonReducer,
    initialState,
    composeEnhancers(middlewareEnhancer)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
