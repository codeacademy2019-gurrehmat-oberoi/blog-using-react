import React from 'react'
import AllCards from '../components/AllCards/AllCards.component'
import CreatePost from '../components/CreatePost/CreatePost.component'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from '../components/App/App.component';

const Routing = () => (
  <Router>
    <div>
      <Route exact path='/' component={()=>(<App />)} />
      <Route exact path='/post' component={()=>(<CreatePost />)} />
    </div>
  </Router>
);
export default Routing;