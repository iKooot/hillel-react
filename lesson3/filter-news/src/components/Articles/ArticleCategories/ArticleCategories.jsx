import React, {Component} from 'react';
import classes from "./ArticleCatigories.module.scss"
import PropTypes from 'prop-types';

class ArticleCategories extends Component {
  render() {
    const categories = this.props.list.map( (cat, i) => <li style={{marginRight: "10px"}} key={cat.id}>{`${i + 1} - ${cat.name}`}</li>)

    return (
        <div className={classes["cat-wrapper"]}>
          <h3>Categories:</h3>
          <ul>
            {categories}
          </ul>
        </div>
    );
  }
}

ArticleCategories.propTypes = {
  list: PropTypes.array,
}

export default ArticleCategories;