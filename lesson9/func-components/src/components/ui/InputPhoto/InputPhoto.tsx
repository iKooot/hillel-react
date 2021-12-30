import React from 'react';
import classes from './InputPhoto.module.scss'

interface RefProps {
    id?: string;
    name: string;
    label: string;
    valid: boolean |  null;
    errorMessage: string;
    className?: string;
}

interface ComponentProps extends RefProps {
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
}

const MyInputText = (props: ComponentProps) => {
    const {
        id = `${props.name} ${Math.random()}`,
        label = 'Some text input',
        name = 'Custom name',
        className,
        forwardedRef,
        valid,
        errorMessage,
    } = props;

    let message = null

    if (valid === false) {
        message = <span className={classes.error}>{errorMessage}</span>
    } else if (valid === true) {
        message = <span className={classes.success}>Done!</span>
    }

    return (
        <div className={`${classes['input-wrapper']} ${className && className}`}>
            <label htmlFor={id}> {label} {valid !== null && message} </label>
            <input ref={forwardedRef} name={name} type="file" id={id} accept=".jpg, .jpeg, .png"/>
        </div>
    );
};

const InputPhoto = React.forwardRef<HTMLInputElement, RefProps>((props, ref) => {
    return <MyInputText {...props} forwardedRef={ref}/>;
});

export default InputPhoto;