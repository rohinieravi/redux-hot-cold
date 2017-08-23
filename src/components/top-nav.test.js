import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';
import {toggleInfoModal, newGame, NEW_GAME} from '../actions';


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
		const wrapper = shallow(<TopNav dispatch={dispatch} />);
		wrapper.find('.new').simulate('click', { 
			preventDefault(){}
		});
		expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
	});
});