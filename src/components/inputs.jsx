import React, { Component } from "react";

class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      blur1: false,
      blur2: false,
      blur3: false,
      blur4: false,
    };
  }
  blurEffect1 = () => {
    this.setState({
      blur1: true,
    });
  };
  blurEffect2 = () => {
    this.setState({
      blur2: true,
    });
  };
  blurEffect3 = () => {
    this.setState({
      blur3: true,
    });
  };
  blurEffect4 = () => {
    this.setState({
      blur4: true,
    });
  };
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
    const details = {
      userName: this.state.name,
      userEmail: this.state.email,
      userPassword: this.state.password,
      userConfirmationPass: this.state.confirm,
    };
    console.log(details);
  };
  errorMess1 = `Name should not include a special character`;
  errorMess2 = `Email should be valid`;
  errorMess3 = `Password should not be less than 6 and include atleast 1 number`;
  errorMess4 = `Passwords must be same`;
  render() {
    return (
      <form>
        <div className="container">
          <p className="title">Sign up</p>
          <label>name</label>
          <input
            type="name"
            className="nameinp"
            value={this.state.name}
            onChange={this.handleNameChange}
            onBlur={this.blurEffect1}
            focused={this.state.blur1.toString()}
            placeholder="Name"
            pattern="^[A-Za-z0-9]{3,16}$"
            required
          ></input>
          <span className="namespan">{this.errorMess1}</span>
          <label>email</label>

          <input
            type="email"
            className="email"
            value={this.state.email}
            placeholder="...@forexample.com"
            onChange={this.handleEmailChange}
            onBlur={this.blurEffect2}
            focused={this.state.blur2.toString()}
            required
          ></input>
          <span className="emailspan">{this.errorMess2}</span>
          <label>password</label>

          <input
            type="password"
            className="pass"
            value={this.state.password}
            onChange={this.handlePassChange}
            onBlur={this.blurEffect3}
            focused={this.state.blur3.toString()}
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            placeholder="password"
          ></input>
          <span className="passwordspan">{this.errorMess3}</span>
          <label>confirm password</label>

          <input
            type="password"
            className="confpass"
            value={this.state.confirm}
            onChange={this.handleConfChange}
            onBlur={this.blurEffect4}
            placeholder="confirm password"
            pattern={this.state.password}
            onFocus={this.blurEffect4}
            focused={this.state.blur4.toString()}
            required
          ></input>
          <span className="confspan">{this.errorMess4}</span>
          <button
            className="btn btn-primary"
            onClick={() => this.handleForm()}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Inputs;
