import React, {Component} from 'react';
import Article from "../Article/Article";
import MyLink from "../../UI/MyLink/MyLink";

class ArticleItem extends Component {
  render() {
    return (
        <li>
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