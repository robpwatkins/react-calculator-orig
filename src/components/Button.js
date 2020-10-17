import React from 'react';

const Button = props => {
  // const handleClick = () => {
  //   props.handleClick(props.char);
  // }

  return (
    <div 
      className={`button ${props.name}`}
      onClick={event => props.handleClick(event)}
      >
        {props.char}
    </div>
  )
}

export default Button;