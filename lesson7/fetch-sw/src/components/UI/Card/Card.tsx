import React, {Component} from 'react';
import classes from './Card.module.scss'

type MyProps = {
    children?: React.ReactNode;
    className?: string;
}

class Card extends Component<MyProps> {
    render() {
        const {children, className = ''} = this.props;
        return (
            <div className={`${classes.card} ${className}`}>
                {children}
            </div>
        );
    }
};

export default Card;