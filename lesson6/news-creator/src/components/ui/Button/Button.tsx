import React, {Component} from 'react';
import classes from './Button.module.scss'

type MyProp = {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

class Button extends Component<MyProp> {
    render() {
        const {className = '', onClick = () => {}, children, type = 'button', disabled = false} = this.props;
        return (
            <button disabled={disabled} type={type} className={`${classes.button} ${className}`} onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;