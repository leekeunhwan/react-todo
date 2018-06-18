import React, { Component } from "react";

export default class LoginForm extends Component {
  // state = { username: "", password: "" };

  // handleUsernameChange = e => {
  //   this.setState({ username: e.target.value });
  // };

  // handlePasswordChange = e => {
  //   this.setState({ password: e.target.value });
  // };
  usernameRef = React.createRef();
  passwordRef = React.createRef();

  handleLoginClick = async e => {
    const { onLogin } = this.props;
    // onLogin(this.state.username, this.state.password);
    onLogin(this.usernameRef.current.value, this.passwordRef.current.value);
  };

  render() {
    // const { username, password } = this.state;
    return (
      <React.Fragment>
        <h1>로그인이 필요합니다.</h1>
        <form>
          <p>
            ID :
            <input type="text" ref={this.usernameRef} />
          </p>
          <p>
            PW :
            <input type="password" ref={this.passwordRef} />
          </p>
        </form>
        <button onClick={this.handleLoginClick}>로그인하기</button>
      </React.Fragment>
    );
  }
}
