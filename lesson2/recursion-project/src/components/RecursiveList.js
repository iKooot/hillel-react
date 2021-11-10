import React, {Component} from 'react'
import ListItem from "./ListItem";
import List from "./List";


export default class RecursiveList extends Component {
  render() {

    return (
        <div className="list-wrapper">
          <ul>
            {this.props.data.map( el => {
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
        </div>
    )
  }
}