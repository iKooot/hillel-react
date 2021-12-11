import React, {Component} from 'react';
import classes from './InputRadio.module.scss'

type MyProps = {
    id?: string;
    name: string;
    label: string;
    radioArray: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    valid: boolean;
    touched: boolean;
    errorMessage: string;
    successMessage?: string;
    className?: string;
}

class InputRadio extends Component<MyProps> {
    render() {
        const {
            id = `${this.props.name} ${Math.random()}`,
            label = 'Some text input',
            name = 'Custom name',
            onChange,
            onBlur,
            valid = false,
            touched = false,
            errorMessage,
            successMessage = 'Done',
            className,
            radioArray
        } = this.props;

        return (
            <div className={`${classes['input-wrapper']} ${className && className}`}>
                <label htmlFor={id}>
                    {label}:
                    { !valid && touched && (<span className={classes.error}>{errorMessage}</span>) }
                    { valid && touched && (<span className={classes.success}>{successMessage}</span>) }
                </label>
                <div>
                    {radioArray.map( (el, i) => <div>
                        <label>
                            <input name={name} type="radio" id={id} onBlur={onBlur} onChange={onChange} value={el}/>
                            {el}
                        </label>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default InputRadio;