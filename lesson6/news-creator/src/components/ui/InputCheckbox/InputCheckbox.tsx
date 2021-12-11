import React, {Component} from 'react';
import classes from './InputCheckbox.module.scss'

type MyProps = {
    id?: string;
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    className?: string;
}

class InputCheckbox extends Component<MyProps> {
    render() {
        const {
            id = `${this.props.label} ${Math.random()}`,
            label = 'Some checkbox',
            onChange,
            onBlur,
            checked,
            className,
        } = this.props;

        return (
            <div className={`${classes['input-wrapper']} ${className && className}`}>
                <label htmlFor={id}>
                    {label}
                </label>
                <input name={label} type="checkbox" id={id} onChange={onChange} onBlur={onBlur} checked={checked}/>
            </div>
        );
    }
}

export default InputCheckbox;