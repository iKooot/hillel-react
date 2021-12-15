import React from 'react';
import classes from './Pagination.module.scss'
import PaginationButton from "../UI/PaginationButton/PaginationButton";

type Props = {
    pageOptions: {
        currentPage: number;
        totalPage: number;
    }
    onSetPage: (index: number) => void
};
type State = {

};

class Pagination extends React.Component<Props, State> {

    onPrevPageHandler = () => {
        let index = this.props.pageOptions.currentPage - 1

        if (index === 1) {
            index = 1
        }

        this.props.onSetPage(index)
    }

    onNexPageHandler = () => {
        let index = this.props.pageOptions.currentPage + 1

        if (index === this.props.pageOptions.totalPage) {
            index = this.props.pageOptions.totalPage
        }

        this.props.onSetPage(index)
    }

    setPageHandler = (index: number) => {
        this.props.onSetPage(index + 1)
    }

    render() {
        const {currentPage, totalPage} = this.props.pageOptions
        return (
            <ul className={classes.list}>
                {currentPage !== 1 && <li><PaginationButton onClick={this.onPrevPageHandler} id="prev">Prev</PaginationButton></li>}

                {new Array(this.props.pageOptions.totalPage).fill(' ').map((el,i) =>
                    <li key={i}>
                        <PaginationButton onClick={(e) => this.setPageHandler(i)} current={i + 1 === this.props.pageOptions.currentPage}>{i + 1}</PaginationButton>
                    </li>)
                }

                {currentPage !== totalPage &&  <li><PaginationButton onClick={this.onNexPageHandler} id="next">Next</PaginationButton></li>}
            </ul>
        );
    };
};

export default Pagination