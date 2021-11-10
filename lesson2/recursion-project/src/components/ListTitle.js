import React, {Component} from 'react'

export default class List extends Component {
  render() {
    const {name} = this.props
    return (
        <div className="title-wrapper">
          <div className="icon">&#10095;</div>
          <p className="parent-list">{name}</p>
        </div>
    )
  }
}