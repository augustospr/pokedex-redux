import { combineReducers } from "redux";

import statusReducer from "./status/reducer";
import dataFromApi from "./dataApi/reducer";

const rootReducer = combineReducers({ statusReducer, dataFromApi });

export default rootReducer;