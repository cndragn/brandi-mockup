import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from '../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const wrapper = shallow(<Footer />);
});
