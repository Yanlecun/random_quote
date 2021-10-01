import React, { Component } from 'react';
import Box from "./components/Box.js"
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return(
      <div className="App">
        <Box />
      </div>
    );
  }
}





export default App;
