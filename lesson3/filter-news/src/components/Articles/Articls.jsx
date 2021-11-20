import React, {Component} from 'react';
import classes from './Articls.module.scss'
import dataList from '../../data/news.json'
import ArticleItem from "./ArticleItem/ArticleItem";
import Filters from "./Filters/Filters";

class Articls extends Component {
  state = {
    newsList: dataList
  }

  filterNews = (filters) => {

    console.log(filters)

    if (filters.special) {
      this.setState({
        ...this.state,
        newsList: [...this.state.newsList].filter(el => el.isSpecial)
      })
    } else if (filters.link) {
      this.setState({
        ...this.state,
        newsList: [...this.state.newsList].filter(el => el.link)
      })
    } else if (filters.pic) {
      this.setState({
        ...this.state,
        newsList: [...this.state.newsList].filter(el => el.photo)
      })
    } else {
      this.setState({
        ...this.state,
        newsList: dataList
      })
    }

  }

  render() {
    const listContent = this.state.newsList.map((article, index) => <ArticleItem key={article.id} article={{...article, index}}/>)

    return (
        <>
          <Filters onFilter={this.filterNews}/>
          <ul className={classes.list}>
            {listContent}
          </ul>
        </>
  );}
}

export default Articls;