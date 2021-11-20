import React, {Component} from 'react';
import classes from "./Filters.module.scss"

class Filters extends Component {

  render() {
    return (
        <div className={classes["filters-wrapper"]}>
          <div>
            <label htmlFor="special">По "special"</label>
            <input onChange={this.props.onChange} type="checkbox" id="special" value="special"/>
          </div>
          <div>
            <label htmlFor="pic">По картинке</label>
            <input onChange={this.props.onChange} type="checkbox" id="pic" value="pic"/>
          </div>
          <div>
            <label htmlFor="link">По ссылке</label>
            <input onChange={this.props.onChange} type="checkbox" id="link" value="link"/>
          </div>
          <button type="button">Фильтровать</button>
        </div>
    );
  }
}

export default Filters;