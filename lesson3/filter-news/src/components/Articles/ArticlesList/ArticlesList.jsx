import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from "./ArticlesList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";

class ArticlesList extends Component {
  render() {
    return (
        <ul className={classes.list}>
          {this.props.list.map((article, index) => <ArticleItem key={article.id} article={{...article, index}}/>)}
        </ul>
    );
  }
}

ArticlesList.propTypes = {
  list: PropTypes.array,
}

export default ArticlesList;