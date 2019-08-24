import React from "react";
import logo from "./logo.svg";
import MaskedInput from "react-text-mask";

import "./App.css";
import { Button, Input } from "antd";
import { AnotherComponent } from "./AnotherComponent";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      dataUsers: [],
      numberMultiply: 0,
      numberMultiply1: 0,
      numberMultiply2: 0
    };
  }

  // componentDidMount() {
  //   this.handleFetchUsers();
  // }

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

  handleFetchUsers = () => {
    Axios.get("https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users").then(
      ({ data }) => {
        // const {data} = dataUser
        // console.log("data", data);
        // console.log()
        this.setState({ dataUsers: data });
        // alert('Berhasil')
        console.log('this.state', this.state.dataUsers)
      }
    );
  };

  render() {
    const { number: mb, numberMultiply, dataUsers } = this.state;
    return (
      <div className="App" style={{ backgroundColor: "blue" }}>
        <AnotherComponent
          {...this.state}
          handleIncrementNumber={this.handleIncrementNumber}
          handleDecrementNumber={this.handleDecrementNumber}
          handleFetchUsers={this.handleFetchUsers}
          users={dataUsers}
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
        />name
      </div>
    );
  }
}

export default App;
