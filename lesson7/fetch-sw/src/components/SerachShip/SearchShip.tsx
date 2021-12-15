import React, {Component} from 'react';
import classes from './SearchShip.module.scss'
import Button from "../UI/Button/Button";

type MyProps = {
    options: {
        value: string;
    },
    onChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void
    onClick: () => void
}

class SearchShip extends Component<MyProps> {
    render() {
        const {value} = this.props.options
        const {onChange, onClick} = this.props

        return (
            <div className={classes.wrapper}>
                <h3>Find yours ship</h3>
                <label className={classes['input-group']}>
                    <input type="text" name="input" onChange={onChange} value={value}/>
                    <p className={classes.notification}>
                        Enter name or model of Starship
                    </p>
                </label>
                <Button onClick={onClick}>Find ship</Button>
            </div>
        );
    }
}

export default SearchShip;