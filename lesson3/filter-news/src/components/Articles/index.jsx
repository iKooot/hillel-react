import React, {Component} from 'react';
import dataList from '../../data/news.json'
import Filters from "./Filters/Filters";
import ArticlesList from "./ArticlesList/ArticlesList";

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

    return (
        <>
          <Filters onChange={this.setFilters}/>
          <ArticlesList list={filteredNews}/>
        </>
  );}
}

export default Articles;