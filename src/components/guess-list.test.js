import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';


describe('<GuessList />', () => {
	it('Render without crashing', () => {
		shallow(<GuessList guesses={[]} />);
	});

	it('Render guess list initially', () => {
		const list = [1, 2, 3];
		const wrapper = shallow(<GuessList guesses={list}/>);
		expect(wrapper.hasClass('guessBox')).toEqual(true);
	});
});