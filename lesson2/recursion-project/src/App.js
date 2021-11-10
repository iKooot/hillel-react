import React, {Component} from 'react'
import recursiveList from './data/directories.json'
import PDF from './assets/pdf.svg'
import EXEL from './assets/xlsx.svg'
import DOC from './assets/docx.svg'

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

const DirTitle = ({name, type}) => {
  return (
      <div className="title-wrapper">
        <div className="icon">&#10095;</div>
        <p className="parent-list">{name}</p>
      </div>
  )
}
const ListElement = ({name}) => {
  let icon = PDF

  if (/\.xlsx/mg.test(name)) {
    icon = EXEL
  }

  if (/\.docx/mg.test(name)) {
    icon = DOC
  }

  return (
      <li className="title-wrapper">
        <div className="icon-wrapper"><img src={icon} alt=""/></div>
        <p className="parent-list">{name}</p>
      </li>
  )
}

const List = ({dataArr}) => {
  //it`s helper for better UI))) It`s not necessary
  const nameTransform = (name) => {
     return name[0].toUpperCase() + name.slice(1)
  }

  return (
      <ul>
        {dataArr.map( el => {
          if (el.type === 'dir') {
            return (
                <li key={el.id}>
                  <DirTitle name={nameTransform(el.name)} type={el.type}/>
                  <List dataArr={el.children}/>
                </li>
            )
          } else {
            return ( <ListElement key={el.id} name={el.name}/>)
          }
        })}
      </ul>
  )
}

export default App;
