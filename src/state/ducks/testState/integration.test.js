import { storeFactory } from '../../../test/helpers';
import { testActions } from './index';

let initialState = { testState: false };
const store = storeFactory(initialState);

// console.log('asdf111');
// console.log(store.getState()); 

store.dispatch( testActions.changeTestState(true) );

// console.log('asdf222');
// console.log(store.getState()); 

describe('guessWord action dispatcher', () => {
    it('', () => {});
});