import React, {Component} from 'react';
import classes from "./Article.module.scss";

import ArticleCategories from "../ArticleCategories/ArticleCategories";
import PropTypes from "prop-types";

class Article extends Component {
  dateTransformer = (date) => {
    const dateObj = new Date(date.slice(0, 19))

    let day = dateObj.getDay()

    if (day < 10) {
      day = '0' + day
    }

    let month = dateObj.getMonth() + 1

    if (month < 10) {
      month = '0' + month
    }

    return `${day}-${month}-${dateObj.getFullYear()}`
  }

  render() {
    const {
      title,
      author,
      dateCreated,
      content,
      categories,
      isSpecial,
      photo,
      index
    } = this.props.data

    const imgUrl = photo + `?v=${index}`;
    const date = this.dateTransformer(dateCreated)

    return (
        <article className={classes.article}>
          {isSpecial && <div className={classes.special}>Special</div>}
          <div className={classes["content-wrapper"]}>
            <div>
              <div>
                <h1>{title}</h1>
                <time dateTime={date}>Publish date: <span>{date}</span></time>
              </div>
              <span className={classes.author}>Author: <span>{author}</span></span>
              <ArticleCategories list={categories}/>
            </div>
            <div className={classes["img-wrapper"]}>{photo && <img src={imgUrl} alt="title"/>}</div>
          </div>
          <div className={classes.text} dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>
    );
  }
}

Article.defaultProps = {
  author: PropTypes.string,
  categories: PropTypes.array,
  content: PropTypes.any,
  dateCreated: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  isSpecial: PropTypes.bool,
  link: PropTypes.string | PropTypes.oneOf([null]),
  photo: PropTypes.string,
  title: PropTypes.string,
}

export default Article;