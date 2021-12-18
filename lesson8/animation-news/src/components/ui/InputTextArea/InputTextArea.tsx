import React, {Component} from 'react';
import classes from './InputTextArea.module.scss'

interface RefProps {
    id?: string;
    name: string;
    label: string;
    className?: string;
}

interface ComponentProps extends RefProps {
    forwardedRef: React.ForwardedRef<HTMLTextAreaElement>;
}

class MyInputTextArea extends Component<ComponentProps> {
    render() {
        const {
            id = `${this.props.name} ${Math.random()}`,
            label = 'Some textarea input',
            name = 'Custom name',
            className,
            forwardedRef
        } = this.props;

        return (
            <div className={`${classes['input-wrapper']} ${className && className}`}>
                <label htmlFor={id}> {label} </label>
                <textarea name={name} id={id} ref={forwardedRef}/>
            </div>
        );
    }
}

const InputTextArea = React.forwardRef<HTMLTextAreaElement, RefProps>((props, ref) => {
    return <MyInputTextArea {...props} forwardedRef={ref}/>;
});

export default InputTextArea;