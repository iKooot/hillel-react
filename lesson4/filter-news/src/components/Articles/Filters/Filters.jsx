import React, {Component} from 'react';
import classes from "./Filters.module.scss"
import Card from "../../UI/Card/Card";
import PropTypes from 'prop-types';
import CatCheckbox from "../../UI/CatCheckbox/CatCheckbox";

class Filters extends Component {

  render() {

    return (
        <>
          <Card className={`${classes["card-wrapper"]} ${classes["input-text-wrapper"]}`}>
            <h3>Lats filter by text</h3>
            <input  type="text" id="text-field" onChange={this.props.onChangeText} value={this.props.filters.text}/>
          </Card>
          <Card className={classes["card-wrapper"]}>
            <h3>Lats filter by categories</h3>
            <div className={classes["cat-filter-wrapper"]}>
              {this.props.categories.map(cat => <CatCheckbox className={classes.categories} onChange={this.props.onChangeCategories} key={cat.id} inputAttrs={cat}/>)}
            </div>
          </Card>
          <Card className={classes["card-wrapper"]}>
            <h3>Lats filter by checkbox </h3>
            <div className={classes["filters-wrapper"]}>
              <div>
                <input onChange={this.props.onChangeCheckbox} type="checkbox" id="isSpecial" value="isSpecial"/>
                <label htmlFor="isSpecial">Special</label>
              </div>
              <div>
                <input onChange={this.props.onChangeCheckbox} type="checkbox" id="photo" value="photo"/>
                <label htmlFor="photo">Photo</label>
              </div>
              <div>
                <input onChange={this.props.onChangeCheckbox} type="checkbox" id="link" value="link"/>
                <label htmlFor="link">Link</label>
              </div>
            </div>
          </Card>
        </>
    );
  }
}

Filters.propTypes = {
  onChange: PropTypes.func,
}

export default Filters;