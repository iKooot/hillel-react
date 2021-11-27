import React, {Component} from 'react';
import classes from './Card.module.scss'

class Card extends Component {
  render() {
    const {className = ''} = this.props
    return (
        <div className={`${className} ${classes.card}`}>
          {this.props.children}
        </div>
    );
  }
}

export default Card;