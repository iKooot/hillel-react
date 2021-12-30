import React from 'react';
import classes from './InputCheckbox.module.scss'

interface RefProps {
    id?: string;
    label: string;
    className?: string;
}

interface ComponentProps extends RefProps {
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
}

const MyInputCheckbox = (props: ComponentProps) => {
    const {
        id = `${props.label} ${Math.random()}`,
        label = 'Some checkbox',
        className,
        forwardedRef
    } = props;

    return (
        <div className={`${classes['input-wrapper']} ${className && className}`}>
            <label htmlFor={id}>
                {label}
            </label>
            <input name={label} type="checkbox" id={id} ref={forwardedRef}/>
        </div>
    );
};

const InputCheckbox = React.forwardRef<HTMLInputElement, RefProps>((props, ref) => {
    return <MyInputCheckbox {...props} forwardedRef={ref}/>;
});

export default InputCheckbox;