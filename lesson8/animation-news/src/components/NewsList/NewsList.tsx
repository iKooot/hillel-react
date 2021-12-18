import React, {Component, ForwardedRef} from 'react';
import classes from './NewsList.module.scss'
import NewsItem from "../NewsItem/NewsItem";
import {NewsType} from "../../types/news.type";

interface ListProps {
    list: NewsType[],
    onRemoveArticle: (id: string) => void;
}

interface MyProps extends ListProps {
    forwardRef: ForwardedRef<HTMLUListElement>
}

class MyNewsList extends Component<MyProps> {
    render() {
        const {list, onRemoveArticle, forwardRef} = this.props;
        return (
            <ul className={classes.list} ref={forwardRef}>
                {list.length > 0
                    ? list.map(article => <NewsItem key={article.id} article={article} onRemoveArticle={onRemoveArticle}/>)
                    : <h3 className={classes.title}>Ups, we haven`t articles, try to add it</h3>
                }
            </ul>
        );
    }
}

const NewsList = React.forwardRef<HTMLUListElement, ListProps>((props, ref) => {
    return <MyNewsList {...props} forwardRef={ref}/>
})

export default NewsList;