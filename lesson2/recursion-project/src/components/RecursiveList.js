import React, {Component} from 'react'
import ListItem from "./ListItem";
import ListTitle from "./ListTitle";
import List from "./List";


export default class RecursiveList extends Component {
  render() {
    //it`s helper for better UI))) It`s not necessary
    const nameTransform = (name) => {
      return name[0].toUpperCase() + name.slice(1)
    }

    return (
        <div className="list-wrapper">
          <ul>
            {this.props.data.map( el => {
              if (el.type === 'dir') {
                return (
                    <li key={el.id}>
                      <ListTitle name={nameTransform(el.name)} type={el.type}/>
                      <List dataArr={el.children}/>
                    </li>
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