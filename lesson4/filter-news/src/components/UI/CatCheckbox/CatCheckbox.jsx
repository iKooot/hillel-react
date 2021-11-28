import React, {Component} from 'react';
import classes from './CatCheckbox.module.scss'

class CatCheckbox extends Component {
  render() {
    const {inputAttrs, onChange, className = ''} = this.props

    return (
        <div className={`${classes["checkbox-wrapper"]} ${className}`}>
          <input type="checkbox" id={inputAttrs.id} onChange={onChange} value={inputAttrs.name} />
          <label htmlFor={inputAttrs.id}>{inputAttrs.name}</label>
        </div>
    );
  }
}

export default CatCheckbox;