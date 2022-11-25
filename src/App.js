import React, { Component } from "react";
import Inputs from "./components/form/signup/inputs1";
import LoginForm from "./components/form/login/login";
// import Form from "./components/Form/inputs";

class My_form extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <Inputs /> */}
        <LoginForm />
      </>
    );
  }
}

export default My_form;
