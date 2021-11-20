import React, {Component} from 'react';
import classes from "./Filters.module.scss"

class Filters extends Component {
  state = {}

  changeCheckboxHandler = ({target}) => {
    this.setState({
      ...this.state,
      [target.value]: target.checked
    })
  }

  filterHandler = () => {
    this.props.onFilter(this.state)
  }

  render() {
    return (
        <div className={classes["filters-wrapper"]}>
          <div>
            <label htmlFor="special">По "special"</label>
            <input onChange={this.changeCheckboxHandler} type="checkbox" id="special" value="special"/>
          </div>
          <div>
            <label htmlFor="pic">По картинке</label>
            <input onChange={this.changeCheckboxHandler} type="checkbox" id="pic" value="pic"/>
          </div>
          <div>
            <label htmlFor="link">По ссылке</label>
            <input onChange={this.changeCheckboxHandler} type="checkbox" id="link" value="link"/>
          </div>
          <button onClick={this.filterHandler} type="button">Фильтровать</button>
        </div>
    );
  }
}

export default Filters;