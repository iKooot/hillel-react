import React, {Component} from 'react';
import classes from './InputPhoto.module.scss'

type MyProps = {
    id?: string;
    name: string;
    label: string;
    prev: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    valid: boolean;
    touched: boolean;
    errorMessage: string;
    successMessage?: string;
    className?: string;
}

class InputPhoto extends Component<MyProps> {
    render() {
        const {
            id = `${this.props.name} ${Math.random()}`,
            label = 'Some text input',
            name = 'Custom name',
            onChange,
            onBlur,
            prev,
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
                <div className={classes['img-wrapper']}>
                    <input name={name} type="file" id={id} onBlur={onBlur} onChange={onChange}  accept=".jpg, .jpeg, .png"/>
                    {prev && <img src={prev} alt={name}/>}
                </div>
            </div>
        );
    }
}

export default InputPhoto;