import React, {Component} from 'react'
import Articls from "./components/Articles/Articls";

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="main-title">News articles list</h1>
          <Articls/>
        </div>
    );
  }
}

export default App;
