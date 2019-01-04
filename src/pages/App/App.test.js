import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    let wrapped = null;
    wrapped = shallow(<App />);
    expect(wrapped.find('.App').length).toBe(1);
});


