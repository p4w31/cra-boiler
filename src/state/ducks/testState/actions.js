import * as types from './types';

export function changeTestState(newState) {
    return {
        type: types.CHANGE_TEST_STATE,
        payload: { testState: newState }
    }
}