import * as types from "./types";
import _ from 'lodash';

const initialState = false;

const testStateReducer = function(state = initialState, action) {
    switch (action.type) {

        case types.CHANGE_TEST_STATE:
            return action.payload.testState;

        default:
            return state; 
    } 
};


export default testStateReducer;