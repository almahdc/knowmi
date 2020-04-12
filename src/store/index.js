import rootReducer from "./reducers/root";

import {createStore, compose, applyMiddleware} from "redux";
import auth, {checkAuthState} from "./middleware/authMiddleware";
import api from "./middleware/apiMiddleware";
import logout from "./middleware/logout";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(auth, api, logout, checkAuthState))
);

export default store;
