import React, {Component} from 'react'
import ListItem from "./ListItem";


export default class List extends Component {
  render() {
    const {dataArr} = this.props

    return (
        <ul>
          {dataArr.map( el => {
            if (el.type === 'dir') {
              return (
                  <ListItem name={el.name} type={el.type} key={el.id}>
                    <List dataArr={el.children}/>
                  </ListItem>
              )
            } else {
              return ( <ListItem key={el.id} name={el.name}/>)
            }
          })}
        </ul>
    )
  }
}