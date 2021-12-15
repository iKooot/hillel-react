import React, {Component} from 'react';
import classes from './Button.module.scss'

type MyProp = {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    transparent?: boolean
}

class Button extends Component<MyProp> {
    render() {
        const {className = '', onClick = () => {}, children, type = 'button', disabled = false, transparent} = this.props;
        return (
            <button disabled={disabled} type={type} className={`${classes.button} ${className} ${transparent && classes.transparent}`} onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;