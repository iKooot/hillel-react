import React from 'react';
import classes from './NewsList.module.scss'
import {NewsListPropType} from "./NewsList.type";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({list, onRemoveArticle}: NewsListPropType) => {
    return (
        <>
            <ul className={list.length > 1 ? classes.list : classes['list-single']}>
                {list.map(article => (<NewsItem onRemoveArticle={onRemoveArticle} key={article.id} article={article}/>))}
            </ul>
        </>
    );
};

export default NewsList;