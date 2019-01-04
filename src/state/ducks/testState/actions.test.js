import { changeTestState } from './actions';
import * as types from './types';

describe('changeTestState action', () => {
    it('return correct action', () => {
        const param = true;
        const expectedAction = {
            type:  types.CHANGE_TEST_STATE,
            payload: { testState: param }
        }
        const action = changeTestState(param);
        expect(action).toEqual(expectedAction);
    });
});