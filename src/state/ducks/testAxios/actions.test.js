import { storeFactory } from '../../../test/helpers';
import { fetchJSON } from './actions';
import moxios from 'moxios';
import sinon from 'sinon';

describe('fetchJSON action', () => {

    beforeEach(() => {
        moxios.install()
    });

    afterEach(function () {
        moxios.uninstall()
    })

    it('should fetch data', (done) => {
        const store = storeFactory();
        let arr1 = [{name:'user1'},{name:'user2'},{name:'user3'}];
        let spy1 = sinon.spy();

        fetchJSON()(spy1); 

        moxios.wait(function () {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: arr1
            }).then((data) => {
                //expect(spy1.getCall(1).args[0].payload).toEqual(arr1);
                //expect(spy1.getCall(1).args[0].type).toEqual(true);
                expect(store.getState()).toBe(true);
                done();
            });
        })

        //expect(data).toEqual(true);
    });

});