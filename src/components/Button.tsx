import React, { PropsWithChildren } from 'react';
import "./Button.css";

interface Props extends PropsWithChildren {};

const Button:React.FC<Props> = (props) => {
  return (
    <button className='button'>
        {props.children}
    </button>
  )
}

export default Button
