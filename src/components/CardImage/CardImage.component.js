import React from 'react';
import './CardImage.css';
const CardImage = (props) => {
  return (
      <img src={require('../../Images/' + props.imageName)} className="CardImage" alt = '' />
  );
};

CardImage.defaultProps = {
  imageName: "abstract.png",
};

export default CardImage;