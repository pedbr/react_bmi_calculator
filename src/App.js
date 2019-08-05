import React, { Component } from "react";
import DisplayResult from './Components/displayResult';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: ""
    };
  }

  render() {
    return (
      <div className="main-div">
        <div className="title">BMI Calculator</div>
        <div className="weight-div">
          <label>Weight (kg) </label>
          <input className="input-box" name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>

        <div className="height-div">
          <label>Height (cm) </label>
          <input className="input-box" name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>
        <div className="result-div">
        <div>Result: </div>
        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
        />
        </div>
      </div>
    );
  }
}

export default App;
