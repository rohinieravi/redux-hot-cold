import React from 'react';
import {shallow, mount} from 'enzyme';

import {InfoModal} from './info-modal';
import {toggleInfoModal} from '../actions';


describe('<InfoModal />', () => {
	it('Render without crashing', () => {
		shallow(<InfoModal />);
	});

	it('Render infomodal overlay initially', () => {
		const wrapper = shallow(<InfoModal />);
		expect(wrapper.hasClass('overlay')).toEqual(true);
	});

	it('Should fire callback when Got it is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<InfoModal dispatch={dispatch}/>);
		wrapper.find('.close').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
	});
});