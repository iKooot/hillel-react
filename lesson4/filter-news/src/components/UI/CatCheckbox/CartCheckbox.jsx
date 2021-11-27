import React, {Component} from 'react';

class CartCheckbox extends Component {
  render() {
    const {inputAttrs, onChange} = this.props

    return (
        <div>
          <label htmlFor={inputAttrs.id}>{inputAttrs.name}</label>
          <input type="checkbox" id={inputAttrs.id} onChange={onChange} value={inputAttrs.name} />
        </div>
    );
  }
}

export default CartCheckbox;