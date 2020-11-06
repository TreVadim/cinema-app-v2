import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { sessionsReducer } from "./sessionsReducer";

export const rootReducer = combineReducers({
    moviesData:  moviesReducer,
    sessionData: sessionsReducer
});
