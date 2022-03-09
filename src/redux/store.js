import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import rootSaga from "./rootSaga"
import { rootReducer } from "./rootReducer"

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger)
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga)
