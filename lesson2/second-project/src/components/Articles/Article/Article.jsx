import React, {Component} from 'react';
import ArticleCategories from "../ArticleCategories/ArticleCategories";

class Article extends Component {
  render() {
    const {
      title,
      author,
      dateCreated,
      content,
      categories,
      isSpecial,
      photo
    } = this.props.data


    return (
        <article style={{border: "1px solid white", padding: "20px", marginBottom: "20px"}}>
          {isSpecial && <p>Special</p>}
          <div>
            <h1>{title}</h1>
            <time dateTime={dateCreated}>Publish date: {dateCreated}</time>
          </div>
          <span>Author: {author}</span>
          <ArticleCategories list={categories}/>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {photo && <img src={photo} alt="title"/>}
        </article>
    );
  }
}

export default Article;