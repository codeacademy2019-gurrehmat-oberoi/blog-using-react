import React from 'react';
import Routing from '.';
import {shallow,mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import App from '../components/App/App.component';
import CreatePost from '../components/CreatePost/CreatePost.component';
const rrd = require('react-router-dom');
rrd.BrowserRouter = ({children}) => <div>{children}</div>

describe('routes', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Routing />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should route to App component on route /', ()=> {
    const wrapper = mount(
      <MemoryRouter initialEntries = {['/']}>
        <Routing />
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should route to Create Post Component on route /post', ()=> {
    const wrapper = mount(
      <MemoryRouter initialEntries = {['/post']}>
        <Routing />
      </MemoryRouter>
    );
    expect(wrapper.find(CreatePost)).toHaveLength(1);
  });
})