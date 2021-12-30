import React from 'react';
import classes from './NewsList.module.scss'
import {NewsListPropType} from "./NewsList.type";
import NewsItem from "../NewsItem/NewsItem";
import NewsFilter from "../NewsFilter/NewsFilter";

const NewsList = ({list, onRemoveArticle, onSetFilters}: NewsListPropType) => {
    return (
        <>
            <NewsFilter onSetFilters={onSetFilters} />
            <ul className={list.length > 1 ? classes.list : classes['list-single']}>
                {list.map(article => (<NewsItem onRemoveArticle={onRemoveArticle} key={article.id} article={article}/>))}
            </ul>
        </>
    );
};

export default NewsList;