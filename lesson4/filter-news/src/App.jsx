import React, {Component} from 'react'
import Articles from "./components/Articles";

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="main-title">News articles list</h1>
          <Articles/>
        </div>
    );
  }
}

export default App;
