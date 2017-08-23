import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Renders the guess form initially', () => {
		const wrapper = shallow(<GuessForm />);
		expect(wrapper.hasClass('guess-form')).toEqual(true);
	});

	it('should fire onGuess callback when form is submitted', () => {
		const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = '10';
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
	});

	it('should not fire onGuess callback if input is empty', () => {
		const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        wrapper.simulate('submit');
        expect(dispatch).not.toHaveBeenCalledWith();
	});
});