import rootReducer from './reducers/root'

import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import auth, { checkAuthState } from './middleware/authMiddleware'
import api from './middleware/apiMiddleware'
import logout from './middleware/logout'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk, auth, api, logout, checkAuthState)))

export default store;
