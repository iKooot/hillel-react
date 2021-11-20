import React, {Component} from 'react';
import classes from "./Filters.module.scss"

class Filters extends Component {

  render() {
    return (
        <>
          <h3 className={classes.title}>Filter by:</h3>
          <div className={classes["filters-wrapper"]}>
            <div>
              <input onChange={this.props.onChange} type="checkbox" id="isSpecial" value="isSpecial"/>
              <label htmlFor="isSpecial">Special</label>
            </div>
            <div>
              <input onChange={this.props.onChange} type="checkbox" id="photo" value="photo"/>
              <label htmlFor="photo">Photo</label>
            </div>
            <div>
              <input onChange={this.props.onChange} type="checkbox" id="link" value="link"/>
              <label htmlFor="link">Link</label>
            </div>
          </div>
        </>
    );
  }
}

export default Filters;