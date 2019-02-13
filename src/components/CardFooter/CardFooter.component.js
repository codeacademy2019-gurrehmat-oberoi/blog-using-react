import React from 'react';
import './CardFooter.css'

const CardFooter = (props) => {
  const claps = props.claps;
  const liked = props.liked;
  // const likedIcon = ;
  return (
    <div className='CardFooter'>
      <div className='left'>
        <img src={require('../../Icons/clapping.svg')} className = 'icon clap' alt='' onClick = {()=>props.onClapAction()}/>
        <span className='clapCount'> {claps}</span>
      </div>
      <div className='right'>
        <img src= {require(`../../Icons/heart-${ liked ? 'red':'black'}.svg`)} className = "icon heart" alt= '' onClick = {() => props.onLikeAction()}/>
      </div>
    </div>
  );
}

CardFooter.defaultProps = {
  claps:10,
  liked:false,
}

export default CardFooter;