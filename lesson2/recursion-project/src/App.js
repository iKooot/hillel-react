import React, {Component} from 'react'
import backendData from './data/directories.json'
import RecursiveList from "./components/RecursiveList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: backendData
    }
  }

  render() {
    return (
        <div className="container">
          <h1>Home work with recursive rendering</h1>
          <RecursiveList data={this.state.data}/>
        </div>
    );
  }
}

export default App;
