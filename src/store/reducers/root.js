import {combineReducers} from "redux";
import authReducer from "./authReducer";
import infoReducer from "./infoReducer";

const rootReducer = combineReducers({authReducer, infoReducer});

export default rootReducer;
