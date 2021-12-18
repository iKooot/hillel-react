import React, {Component} from 'react';
import classes from './InputText.module.scss'

interface RefProps {
    id?: string;
    name: string;
    label: string;
    className?: string;
}

interface ComponentProps extends RefProps {
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
}

class MyInputText extends Component<ComponentProps> {
    render() {
        const {
            id = `${this.props.name} ${Math.random()}`,
            label = 'Some text input',
            name = 'Custom name',
            className,
            forwardedRef
        } = this.props;

        return (
            <div className={`${classes['input-wrapper']} ${className && className}`}>
                <label htmlFor={id}> {label} </label>
                <input ref={forwardedRef} name={name} type="text" id={id} />
            </div>
        );
    }
}

const InputText = React.forwardRef<HTMLInputElement, RefProps>((props, ref) => {
    return <MyInputText {...props} forwardedRef={ref}/>;
});

export default InputText;