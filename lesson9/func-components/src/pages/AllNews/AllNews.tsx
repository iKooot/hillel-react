import React from 'react';
import {AllNewsPropType} from "./AllNews.type";
import classes from './AllNews.module.scss'
import NewsList from "../../components/News/NewsList/NewsList";

const AllNews = ({list, onRemoveArticle, onSetFilters}: AllNewsPropType) => {
    return (
        <div>
            {list.length > 0
                ? <NewsList onSetFilters={onSetFilters} list={list} onRemoveArticle={onRemoveArticle}/>
                : <h2 className={classes.title}>We haven`t articles</h2>}
        </div>
    );
};

export default AllNews;