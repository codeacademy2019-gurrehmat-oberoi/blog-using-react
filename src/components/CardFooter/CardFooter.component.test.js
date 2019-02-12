import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import CardFooter from './CardFooter.component';

describe('CardFooter', () => {
  it('should render a Card Footer', () => {
    const tree = renderer.create(<CardFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show red heart when prop liked is true', () => {
    const wrapper = shallow(<CardFooter liked={true} />);
    expect(wrapper.find('.heart').props().src.default).toEqual('heart-red.svg');
  });

  it('should show black heart when prop liked is false', () => {
    const wrapper = shallow(<CardFooter liked={false} />);
    expect(wrapper.find('.heart').props().src.default).toEqual('heart-black.svg');
  });
})