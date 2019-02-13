import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import './CreatePost.css'

const CreatePost = (props) => {
  return(
    <form className="form-width" action="http://localhost:8081/blog" method="POST">
			<ul className="flex-outer">
        <li>
          <label>Date</label>
          <input type="date" name="date" />
        </li>
        <li>
          <label>Read Time</label>
          <input type="text" name="read-time" placeholder="Enter the read time for blog" />
        </li>
        <li>
          <label>Title</label>
          <input type="text" name="title" placeholder="Enter the Title of Post" />
        </li>
        <li>
          <label>Message</label>
          <textarea rows="6" name="message" placeholder="Enter your message here"></textarea>
        </li>
        <li>
            <button type="submit">Submit</button>

        </li>
      </ul>
			</form>
  );
}

export default CreatePost;