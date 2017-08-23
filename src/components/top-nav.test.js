import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';
import {toggleInfoModal, newGame} from '../actions';


describe('<TopNav />', () => {
	it('Render without crashing', () => {
		shallow(<TopNav />);
	});

	it('Should show info when what is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<TopNav dispatch={dispatch} />);
		wrapper.find('.what').simulate('click');
		expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
	});

	it('Should render new game when new game is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<TopNav dispatch={dispatch} />);
		wrapper.find('.new').simulate('click');
		expect(dispatch).toHaveBeenCalledWith(newGame());
	});
});