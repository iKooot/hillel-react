import React, {Component} from 'react';
import classes from './InputText.module.scss'

type MyProps = {
    id?: string;
    name: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    valid: boolean;
    touched: boolean;
    errorMessage: string;
    successMessage?: string;
    className?: string;
}

class InputText extends Component<MyProps> {
    render() {
        const {
            id = `${this.props.name} ${Math.random()}`,
            label = 'Some text input',
            name = 'Custom name',
            onChange,
            onBlur,
            value,
            valid = false,
            touched = false,
            errorMessage,
            successMessage = 'Done',
            className
        } = this.props;

        return (
            <div className={`${classes['input-wrapper']} ${className && className}`}>
                <label htmlFor={id}>
                    {label}
                    { !valid && touched && (<span className={classes.error}>{errorMessage}</span>) }
                    { valid && touched && (<span className={classes.success}>{successMessage}</span>) }
                </label>
                <input name={name} type="text" id={id} onBlur={onBlur} onChange={onChange} value={value}/>

            </div>
        );
    }
}

export default InputText;