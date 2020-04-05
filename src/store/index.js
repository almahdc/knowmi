import rootReducer from './reducers/root'

import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import authMiddleware from './middleware/authMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk, authMiddleware)))

export default store;
