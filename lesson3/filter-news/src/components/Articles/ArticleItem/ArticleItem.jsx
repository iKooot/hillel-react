import React, {Component} from 'react';
import classes from './ArticleItem.module.scss'

import Article from "../Article/Article";
import MyLink from "../../UI/MyLink/MyLink";

class ArticleItem extends Component {
  render() {
    return (
        <li className={classes.item}>
          {
            this.props.article.link
              ? <MyLink><Article data={this.props.article}/></MyLink>
              : <Article data={this.props.article}/>
          }
        </li>
    );
  }
}

export default ArticleItem;