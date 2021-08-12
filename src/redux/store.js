import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [logger, thunk];

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhacer(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default { store, persistor };
