import React, { Component } from 'react'
import './App.css';
import ChangeNumber from './ChangeNumber';
import Random from './Random';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="box">
          <Random />
        </div>
        <div className="box">
          <ChangeNumber />
        </div>
      </div>
    )
  }
}
export default App;
