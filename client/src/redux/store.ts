import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import reducer from "./reducer";
import rootSaga from "./saga";
import { Action, Dispatch, State } from "interfaces/redux";

export const history = createBrowserHistory();

export const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

export const middlewares: Middleware[] = [
  sagaMiddleware,
  routerMiddleware(history)
];

const enhancer: StoreEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
);

export const store = createStore<State, Action, {}, Dispatch>(
  reducer(history),
  enhancer
);

sagaMiddleware.run(rootSaga);
