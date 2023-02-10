import React, { PropsWithChildren } from 'react';
import './Button.css';

interface Props extends PropsWithChildren {
    onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.onClick} className="button">
            {props.children}
        </button>
    );
};

export default Button;
