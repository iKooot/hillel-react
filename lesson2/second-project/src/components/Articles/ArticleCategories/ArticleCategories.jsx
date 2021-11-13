import React, {Component} from 'react';

class ArticleCategories extends Component {
  render() {
    const categories = this.props.list.map( (cat, i) => <li style={{marginRight: "10px"}} key={cat.id}>{`${i + 1} - ${cat.name}`}</li>)

    return (
        <div>
          <h3>Categories:</h3>
          <ul style={{display: "flex"}}>
            {categories}
          </ul>
        </div>
    );
  }
}

export default ArticleCategories;