import React, {Component} from 'react';
import classes from './Articls.module.scss'
import dataList from '../../data/news.json'
import ArticleItem from "./ArticleItem/ArticleItem";
import Filters from "./Filters/Filters";

class Articles extends Component {
  state = {
    newsList: dataList,
    filters: {
      isSpecial: false,
      link: false,
      photo: false,
    }
  }

  setFilters = ({target}) => {
    this.setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [target.value]: target.checked
      }
    }))
  }

  render() {

    const filteredNews = this.state.newsList.filter(el => {
      const {filters} = this.state

      if (filters.isSpecial && !el.isSpecial) {
        return false
      }

      if (filters.photo && !el.photo) {
        return false
      }

      if (filters.link && !el.link) {
        return false
      }

      return true
    })

    const listContent = filteredNews.map((article, index) => <ArticleItem key={article.id} article={{...article, index}}/>)

    return (
        <>
          <Filters onChange={this.setFilters}/>
          <ul className={classes.list}>
            {listContent}
          </ul>
        </>
  );}
}

export default Articles;