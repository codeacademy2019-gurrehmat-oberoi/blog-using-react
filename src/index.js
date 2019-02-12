import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Card from './components/Card/Card.component'
// import CreatePost from './components/CreatePost/CreatePost.component';
import * as serviceWorker from './serviceWorker';
import Routing from './Routes'

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
