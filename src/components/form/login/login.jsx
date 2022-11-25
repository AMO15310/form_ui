import React, { Component } from "react";
import "./login.css";
import login from "./login.png";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";
// import React, { useState, useEffect } from 'react';
import SigninWithGoogle from "./googlesignin";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      inputType: "password",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hidepass = () => {
    this.setState({
      inputType: "password",
    });
  };
  unhidepass = () => {
    this.setState({
      inputType: "text",
    });
  };
  handleForm = (event) => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      return false;
    }
    const Logindetails = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(Logindetails);
  };

  render() {
    return (
      <>
        <form
          className="loginform"
          onSubmit={(event) => this.handleForm(event)}
          action=""
        >
          <img src={login} alt="Logo" />
          <p className="title">Welcome Back</p>
          <label className="emaillabel" htmlFor="email">
            email
          </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />
          <label htmlFor="password">
            password{" "}
            {this.state.inputType === "password" ? (
              <AiOutlineEye className="eye" onClick={this.unhidepass} />
            ) : (
              <AiFillEye className="eye" onClick={this.hidepass} />
            )}{" "}
          </label>
          <input
            type={this.state.inputType}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <button onClick={(event) => this.handleForm(event)}>Log in</button>
          <p className="or">
            OR <br></br>
          </p>
          <SigninWithGoogle />
        </form>
      </>
    );
  }
}

export default LoginForm;
