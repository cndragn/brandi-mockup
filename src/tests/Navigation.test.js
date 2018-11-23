import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from '../components/Navigation';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const wrapper = shallow(<Navigation />);
});

it('does not show mobile menu on full width', () => {
	const wrapper = shallow(<Navigation />);
	const initialToggleState = wrapper.state('isOpen');
	expect(initialToggleState).toBe(false);
});
