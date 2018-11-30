import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Teacher from '../../../src/containers/Teacher.jsx';

configure({ adapter: new Adapter() });

describe('<Teacher />', () => {
  let wrapper;
  it('has the correct name.', () => {
    wrapper = shallow(<Teacher name={'Mr. Tim'} />);
    expect(wrapper.text()).toEqual('Mr. Tim');
  });
});