import React from 'react';
import classes from './Card.module.scss'

type MyProps = {
    children?: React.ReactNode;
    className?: string;
}

function Card(props: MyProps) {
    const {children, className = ''} = props;

    return (
        <div className={`${classes.card} ${className}`}>
            {children}
        </div>
    );
}

export default Card;