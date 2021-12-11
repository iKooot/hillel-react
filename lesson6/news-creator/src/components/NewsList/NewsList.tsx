import React, {Component} from 'react';
import classes from './NewsList.module.scss'
import type {DataType} from "../../types/dataType";
import NewsItem from '../NewsItem/NewsItem'

type MyProps = {
    data: DataType[];
    onRemoveArticle: (id: string) => void;
};

class NewsList extends Component<MyProps> {
    render() {
        const {data, onRemoveArticle} = this.props;
        return (
            <ul className={data.length > 1 ? classes.list : classes['list-single']}>
                {data.map(article => (<NewsItem onRemoveArticle={onRemoveArticle} key={article.id} article={article}/>))}
            </ul>
        );
    }
}

export default NewsList;