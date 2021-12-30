import React from 'react';
import classes from './InputRadio.module.scss'

interface RefProps {
    id?: string;
    label: string;
    name: string;
    className?: string;
}

interface ComponentProps extends RefProps {
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
}

const MyInputRadio = (props: ComponentProps) => {
    const {
        id = `${props.label} ${Math.random()}`,
        label = 'Some checkbox',
        name,
        className,
        forwardedRef
    } = props;

    return (
        <div className={`${classes['input-wrapper']} ${className && className}`}>
            <label htmlFor={id}>
                {label}
            </label>
            <input name={name} type="radio" id={id} ref={forwardedRef} value={label}/>
        </div>
    );
};

const InputRadio = React.forwardRef<HTMLInputElement, RefProps>((props, ref) => {
    return <MyInputRadio {...props} forwardedRef={ref}/>;
});

export default InputRadio;