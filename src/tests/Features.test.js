import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Features from '../components/Features';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const wrapper = shallow(<Features />);
});
