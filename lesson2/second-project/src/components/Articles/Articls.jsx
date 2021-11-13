import React, {Component} from 'react';
import dataList from '../../data/news.json'
import ArticleItem from "./ArticleItem/ArticleItem";

class Articls extends Component {
  render() {
    const listContent = dataList.map(article => <ArticleItem key={article.id} article={article}/>)

    return (
        <ul>
          {listContent}
        </ul>
  );}
}

export default Articls;