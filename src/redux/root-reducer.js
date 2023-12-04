import { combineReducers } from "redux";

import statusReducer from "./status/reducer";

const rootReducer = combineReducers({ statusReducer });

export default rootReducer;