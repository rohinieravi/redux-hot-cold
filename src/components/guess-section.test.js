import React from 'react';
import {shallow} from 'enzyme';

import {GuessSection} from './guess-section';


describe('<GuessSection />', () => {
	it('Render without crashing', () => {
		shallow(<GuessSection />);
	});

	it("Renders correct feedback", () => {
		const feedback = "Foo";
		const wrapper = shallow(<GuessSection feedback={feedback}/>);
		expect(wrapper.find('h2').text()).toEqual(feedback);
	})

	
});