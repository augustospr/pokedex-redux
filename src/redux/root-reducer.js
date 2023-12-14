import { combineReducers } from "redux";

import statusReducer from "./status/reducer";
import dataFromApi from "./dataApi/reducer";
import pagination from "./paginacao/reducer";

const rootReducer = combineReducers({ statusReducer, dataFromApi, pagination });

export default rootReducer;