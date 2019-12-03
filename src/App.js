import React, {Component} from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  state = {
    curPg: "home"
  }
  onPgChoice = e => {
    this.setState({curPg: e.target.id});
  }
  render(){
    return (
      <div className="App">
        <Header curPg={this.state.curPg} onPgChoice={this.onPgChoice} />
      </div>
    );
  }
}

export default App;
