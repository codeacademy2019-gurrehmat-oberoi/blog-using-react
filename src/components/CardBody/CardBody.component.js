import React from 'react';
import './CardBody.css'

const CardBody = (props) => {
  const date = props.date;
  const readTime = props.readTime;
  const blogTitle = props.blogTitle;
  const blogPara = props.blogPara;

  return (
    <div className='CardBody'>
      <div className='meta'>
        <span className="date">{date}</span>
        <span className="readTime">{readTime}</span>
      </div>
      <h1>{blogTitle}</h1>
      <p>{blogPara}</p>
      <hr />
    </div>
  );
}

CardBody.defaultProps = {
  date: '1st January 1970',
  readTime: '1 min',
  blogTitle: 'Lorem ipsum dolor sit',
  blogPara: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default CardBody;