import React, {Component} from 'react'
import recursiveList from './data/directories.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: recursiveList
    }
  }

  render() {
    return (
        <div className="container">
          <h1>Home work with recursive rendering</h1>
          <div className="list-wrapper">
            <List dataArr={this.state.data}/>
          </div>
        </div>
    );
  }
}

const DirTitle = ({name}) => {
  return (
      <div className="title-wrapper">
        <span className="icon">&#10095;</span>
        <p className="parent-list">{name}</p>
      </div>
  )
}

const List = ({dataArr}) => {
  return (
      <ul>
        {dataArr.map( el => {
          if (el.type === 'dir') {
            return (
                <li>
                  <DirTitle name={el.name}/>
                  <List dataArr={el.children}/>
                </li>
            )
          } else {
            return ( <li>{el.name}</li> )
          }
        })}
      </ul>
  )
}

export default App;
