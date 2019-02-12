import React,{Component} from 'react';
import CardImage from '../CardImage/CardImage.component';
import CardBody from '../CardBody/CardBody.component';
import CardFooter from '../CardFooter/CardFooter.component';
import './Card.css'
const axios = require('axios');

class Card extends Component {
  state = {
    post: this.props.post
  };
  componentDidMount(){
    const externalDataPromise = axios.get('https://api.myjson.com/bins/hc5ye');
    externalDataPromise.then((response) => {
      this.setState({
        post: response.data[3],
      });
    });
  }
  render() {
    console.log(this.state.post);
    const post = this.state.post;
    return (
      <div className = 'Card' >
        <CardImage imageName= {post.image} />
        <CardBody 
          date= {post.date} 
          readTime = {post.readingTime}
          blogTitle = {post.title}
          blogPara = {post.description} 
        />
        <CardFooter
          claps = {post.claps}
          liked = {post.liked}
        />
        <button type='button' className='CreatePostButton' onClick={()=>(window.location.href = 'post')}>Create Post</button>
      </div>
    );
  }
}

Card.defaultProps = {
  post: {
    date: "2nd Januray, 2018",
    readingTime: "2 mins",
    title: "The future of abstract art and the culture ...",
    description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    claps: 10,
    liked: false,
    image: "abstract.png"
  }
}

export default Card;