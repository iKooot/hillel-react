import React from 'react';
import classes from './PaginationButton.module.scss'

type Props = {
    id?: string;
    current?: boolean
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent) => void
};
type State = {

};

class PaginationButton extends React.Component<Props, State> {
    render() {
        const {id, current} = this.props
        return (
            <button id={id} className={`${classes.button} ${current && classes.current}`} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    };
};

export default PaginationButton