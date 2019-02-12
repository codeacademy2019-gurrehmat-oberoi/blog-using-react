import React from 'react';
import renderer from 'react-test-renderer';
import CardImage from './CardImage.component';

describe('CardImage', () => {
  it('should render a CardImage', () => {
    const tree = renderer.create(<CardImage />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})