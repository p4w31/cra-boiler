import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import { TestChanger } from './testChanger';
import { findByTestAttr, checkProps } from '../../test/helpers';

let wrapped = null;

const defaultProps = {
    changeTestState: function() {}
};

const prepareComponent = (props={}) => {
    const myProps = { ...defaultProps, ...props };
    wrapped = shallow(<TestChanger {...myProps} />);
    return wrapped;
}

describe('<TestChanger />', () => {
    it('renders without crashing', () => {
        wrapped = prepareComponent();
        expect( findByTestAttr(wrapped, 'test-changer-component') ).toHaveLength(1);
    });

    it('has valid propTypes', () => {
        checkProps(TestChanger, defaultProps);
    });

});




