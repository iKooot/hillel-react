import React, {Component} from 'react';
import classes from './Articls.module.scss'
import dataList from '../../data/news.json'
import ArticleItem from "./ArticleItem/ArticleItem";
import Filters from "./Filters/Filters";

class Articls extends Component {
  state = {
    newsList: dataList
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

      if(filters?.isSpecial) {
        return el.isSpecial
      }

      if(filters?.photo) {
        return el.photo
      }

      if(filters?.link) {
        return el.link
      }

      if(filters?.isSpecial && filters?.photo && !filters?.link) {
        return el.isSpecial && el.photo
      }

      if(!filters?.isSpecial && filters?.photo && filters?.link) {
        return el.link && el.photo
      }

      if(filters?.isSpecial && !filters?.photo && filters?.link) {
        return el.link && el.isSpecial
      }

      if(filters?.isSpecial && filters?.photo && filters?.link) {
        return el.link && el.isSpecial && el.photo
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

export default Articls;