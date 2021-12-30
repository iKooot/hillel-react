import React from 'react';
import classes from './Error.module.scss'

const Error = ({message}: {message: string}) => {
    return (
        <div className={classes.error}>
            <h2>{message}</h2>
        </div>
    );
};

export default Error;