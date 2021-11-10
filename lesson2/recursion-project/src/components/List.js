import React, {Component} from 'react'
import ListItem from "./ListItem";
import ListTitle from "./ListTitle";


export default class List extends Component {
  render() {
    const {dataArr} = this.props

    return (
        <ul>
          {dataArr.map( el => {
            if (el.type === 'dir') {
              return (
                  <li key={el.id}>
                    <ListTitle name={el.name} type={el.type}/>
                    <List dataArr={el.children}/>
                  </li>
              )
            } else {
              return ( <ListItem key={el.id} name={el.name}/>)
            }
          })}
        </ul>
    )
  }
}