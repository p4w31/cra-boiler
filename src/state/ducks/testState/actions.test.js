import { changeTestState } from './actions';
import * as types from './types';

describe('changeTestState action', () => {
    it('return correct action', () => {
        let param = true;
        const action = changeTestState(param);
        expect(action).toEqual({
            type:  types.CHANGE_TEST_STATE,
            payload: { testState: param }
        });
    });
});