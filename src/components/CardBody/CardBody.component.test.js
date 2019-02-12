import React from 'react';
import renderer from 'react-test-renderer';
import CardBody from './CardBody.component';

describe('CardBody', () => {
  it('should render a CardBody', () => {
    const tree = renderer.create(<CardBody />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})