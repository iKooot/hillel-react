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
      text: '',
      categories: []
    }
  }

  setFiltersCheckbox = ({target}) => {
    this.setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [target.value]: target.checked
      }
    }))
  }

  setFiltersCategories = ({target}) => {

    this.setState((prev) => {
        const updateCategories = [...prev.filters.categories]

        const existCatIndex = this.state.filters.categories.findIndex(
            (item) => item.name === target.value
        );

        if (existCatIndex === -1) {
          updateCategories.push({
            id: target.id,
            name: target.value,
            checked: target.checked
          })
        } else {
          if (target.checked) {
            updateCategories[existCatIndex] = {
              id: target.id,
              name: target.value,
              checked: target.checked
            }
          } else {
            updateCategories.splice(existCatIndex, 1)
          }
        }

        return {
        ...prev,
        filters: {
          ...prev.filters,
          categories: updateCategories
        }
      }
    })
  }

  setFiltersText = ({target}) => {
    this.setState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        text: target.value
      }
    }))
  }

  render() {

    const newCategories = []

    this.state.newsList.forEach(article => {
      article.categories.forEach(cat => {
        if(!this.state.filters.categories.includes(cat.name)) {
          newCategories.push({id:cat.id , name: cat.name, checked: false})
        }
      })
    })

    const filteredNews = this.state.newsList.filter(el => {
      const {filters} = this.state
      const title = el.title.toLowerCase()
      const author = el.author.toLowerCase()
      const content = el.content.toLowerCase()
      const filtersText = filters.text.toLowerCase()

      if (filters.isSpecial && !el.isSpecial) {
        return false
      }

      if (filters.photo && !el.photo) {
        return false
      }

      if (filters.link && !el.link) {
        return false
      }

      if (!content.includes(filtersText)
          && !title.includes(filtersText)
          && !author.includes(filtersText)) {
        return false
      }

      const concatArray = el.categories.reduce((acc, el) => {return acc = [...acc, el.name]}, []).join(' ')
      const testArray = filters.categories.reduce((acc, el) => {return acc = [...acc, el.name]}, []).join(' ')

      if (!concatArray.includes(testArray)) {
        return false
      }

      return true
    })

    return (
        <>
          <Filters filters={this.state.filters} categories={newCategories} onChangeCategories={this.setFiltersCategories} onChangeText={this.setFiltersText} onChangeCheckbox={this.setFiltersCheckbox}/>
          <ArticlesList list={filteredNews}/>
        </>
  );}
}

export default Articles;