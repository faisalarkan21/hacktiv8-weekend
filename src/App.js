import React from "react";
import logo from "./logo.svg";
import MaskedInput from "react-text-mask";

import "./App.css";
import { Button, Input } from "antd";
import { AnotherComponent } from "./AnotherComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      numberMultiply: 0,
      numberMultiply1: 0,
      numberMultiply2: 0
    };
  }

  handleIncrementNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrementNumber = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  handleMultiplyNumber = () => {
    this.setState({
      number: this.state.number * this.state.numberMultiply
    });
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ numberMultiply: e.target.value });
  };

  render() {
    const { number: mb, numberMultiply } = this.state;
    return (
      <div className="App"  style={{backgroundColor: 'blue'}}>
        <AnotherComponent
         {...this.state}
          handleIncrementNumber={this.handleIncrementNumber}
          handleDecrementNumber={this.handleDecrementNumber}
        />
        <Button
          onClick={this.handleMultiplyNumber}
          className="coba"
          type="primary"
        >
          Kali
        </Button>
        <br />
        {/* <Input type="number" style={{width: 100}} value={numberMultiply} onChange={this.handleChange} ></Input> */}
        <MaskedInput
          mask={s => Array.from(s).map(() => /[0-9]/i)}
          guide={false}
          class="input"
          id="name"
          placeHolder="input multiplier"
          type="number"
          value={this.state.numberMultiply}
          onChange={this.handleChange}
        />

        <br />
        {/* {mb} */}
      </div>
    );
  }
}

export default App;
