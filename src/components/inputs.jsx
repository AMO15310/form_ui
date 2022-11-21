import React, { Component } from "react";

class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePassChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleConfChange = (event) => {
    this.setState({
      confirm: event.target.value,
    });
  };
  handleForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <p className="title">Sign up</p>
        <input
          type="name"
          value={this.state.name}
          onChange={this.handleNameChange}
          placeholder="Name"
        ></input>
        <input
          type="email"
          value={this.state.email}
          placeholder="...@forexample.com"
          onChange={this.handleEmailChange}
        ></input>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePassChange}
          placeholder="password"
        ></input>
        <input
          type="password"
          value={this.state.confirm}
          onChange={this.handleConfChange}
          placeholder="confirm password"
        ></input>
        <button onClick={() => this.handleForm()} type="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default Inputs;
