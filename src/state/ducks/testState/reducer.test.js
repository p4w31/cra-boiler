import reducer from './reducers';
import * as types from "./types";

describe('TestReducer', () => {
    it('return default initial state when no action passed', () => {
        const newState = reducer(undefined, {});
        expect(newState).toBe(false);
    });

    it('return proper state when action passed', () => {
        const initialState = { testState: true };
        const newState = reducer(initialState, {});
        expect(newState).toBe(initialState);
    });
});