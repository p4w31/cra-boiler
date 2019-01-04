import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import { TestChanger } from './testChanger';
import { findByTestAttr, checkProps } from '../../test/helpers';

const defaultProps = {
    changeTestState: function() {}
};

describe('<TestChanger />', () => {
    it('renders without crashing', () => {
        let wrapped = null;
        wrapped = shallow(<TestChanger />);
        //expect(wrapped.find('.test-changer-wrapper').length).toBe(1);
        expect( findByTestAttr(wrapped, 'test-changer-component') ).toHaveLength(1);
    });

    it('has valid propTypes', () => {
        checkProps(TestChanger, defaultProps);
    });

});




