import React, { Component } from "react";
import "./App.css";
import { ThreeScene } from './ThreeScene';

class App extends Component {

  render() {
    return (
      <div id="ImagemSofa">
        <ThreeScene width={900} height={450} />
      </div>
    );
  }
}

export default App;
