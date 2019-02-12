import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const CreatePost = (props) => {
  return(
    <div>
      This is my sample form<br />
      <button type='button' onClick={ (() => window.location.href = '/')} >Go Back</button>
    </div>
  );
}

export default CreatePost;