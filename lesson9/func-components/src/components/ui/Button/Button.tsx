import React from 'react';
import classes from './Button.module.scss'

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    transparent?: boolean;
}

interface MyProp extends ButtonProps {
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
}

function MyButton(props: MyProp) {
    const {className = '', onClick = () => {}, children, type = 'button', disabled = false, transparent = false, forwardedRef} = props;

    return (
        <button ref={forwardedRef} disabled={disabled} type={type} className={`${classes.button} ${className} ${transparent && classes.transparent}`} onClick={onClick}>
            {children}
        </button>
    );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return <MyButton {...props} forwardedRef={ref}/>;
});


export default Button;