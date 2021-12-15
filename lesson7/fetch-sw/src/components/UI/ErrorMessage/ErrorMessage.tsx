import React, {Component} from 'react';
import classes from './ErrorMessage.module.scss'

type MyProps = {
    message: string
}

class ErrorMessage extends Component<MyProps> {
    render() {
        const {message} = this.props;

        return (
            <div className={classes.error}>
                <h2>{message}</h2>
            </div>
        );
    }
}

export default ErrorMessage;