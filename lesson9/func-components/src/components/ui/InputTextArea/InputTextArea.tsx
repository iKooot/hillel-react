import React  from 'react';
import classes from './InputTextArea.module.scss'

interface RefProps {
    id?: string;
    name: string;
    label: string;
    valid: boolean | null;
    errorMessage: string
    className?: string;
}

interface ComponentProps extends RefProps {
    forwardedRef: React.ForwardedRef<HTMLTextAreaElement>;
}

const MyInputTextArea = (props: ComponentProps) => {
    const {
        id = `${props.name} ${Math.random()}`,
        label = 'Some textarea input',
        name = 'Custom name',
        className,
        forwardedRef,
        valid,
        errorMessage
    } = props;

    let message = null

    if (valid === false) {
        message = <span className={classes.error}>{errorMessage}</span>
    } else if (valid === true) {
        message = <span className={classes.success}>Done!</span>
    }

    return (
        <div className={`${classes['input-wrapper']} ${className && className}`}>
            <label htmlFor={id}> {label} {valid !== null && message}</label>
            <textarea name={name} id={id} ref={forwardedRef}/>
        </div>
    );
};

const InputTextArea = React.forwardRef<HTMLTextAreaElement, RefProps>((props, ref) => {
    return <MyInputTextArea {...props} forwardedRef={ref}/>;
});

export default InputTextArea;