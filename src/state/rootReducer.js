import { combineReducers } from 'redux';
import * as reducers from "./ducks";

const rootReducer = combineReducers({
    testState: reducers.TestReducer,
});

export default rootReducer;