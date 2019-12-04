import React, {Component} from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Portfolio from './Portfolio.js';
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
        {this.state.curPg == "home" && <Home />}
        {this.state.curPg == "portfolio" && <Portfolio />}
      </div>
    );
  }
}

export default App;
