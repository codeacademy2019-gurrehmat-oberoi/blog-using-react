import React from 'react';
import Routing from '.';
import {shallow} from 'enzyme';

describe('routes', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Routing />);
    expect(wrapper).toMatchSnapshot();
  })
})