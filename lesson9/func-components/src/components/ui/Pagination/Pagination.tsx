import React from 'react';
import classes from  './Pagination.module.scss'
import type {PaginationPropType} from "./Pagination.type";

const Pagination = ({className, totalPages, setPage, currentPage, onPrevClick, onNextClick}: PaginationPropType) => {
    return (
        <div className={`${className ?? ''}`}>
            <ul className={classes.list}>
                {currentPage !== 1 && <li className={classes.prev} onClick={onPrevClick}>Prev</li>}
                {new Array(totalPages).fill(' ').map((el, i) => <li
                    className={+currentPage === (i + 1) ? classes.active : ''}
                    onClick={() => setPage(i + 1)}
                    key={i}>
                        {i + 1}
                </li>)}
                {currentPage !== +totalPages && <li className={classes.next} onClick={onNextClick}>Next</li>}
            </ul>
        </div>
    );
};

export default Pagination;