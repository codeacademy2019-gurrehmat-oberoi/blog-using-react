/**
* @jest-environment node
*/

import Card from './Card.component';
import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';

describe('Card', ()=> {
  it('should render a card', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});