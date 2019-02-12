import React from 'react'
import Card from '../components/Card/Card.component'
import CreatePost from '../components/CreatePost/CreatePost.component'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Routing = () => (
  <Router>
    <div>
      <Route exact path='/' render={()=>(<Card />)} />
      <Route exact path='/post' render={()=>(<CreatePost />)} />
    </div>
  </Router>
)
export default Routing;