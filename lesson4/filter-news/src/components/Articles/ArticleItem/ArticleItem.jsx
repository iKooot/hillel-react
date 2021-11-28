import React, {Component} from 'react';
import classes from './ArticleItem.module.scss'
import PropTypes from 'prop-types';


import Article from "../Article/Article";
import MyLink from "../../UI/MyLink/MyLink";
import Filters from "../Filters/Filters";

class ArticleItem extends Component {
  render() {
    return (
        <li className={classes.item}>
          {
            this.props.article.link
              ? <MyLink link={this.props.article.link}><Article data={this.props.article}/></MyLink>
              : <Article data={this.props.article}/>
          }
        </li>
    );
  }
}

Filters.propTypes = {
  article: PropTypes.object,
}

export default ArticleItem;