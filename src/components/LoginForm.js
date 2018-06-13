import React, { Component } from "react";
import todoAPI from "../todoAPI";

export default class LoginForm extends Component {
  state = { username: "", password: "" };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleLoginClick = async e => {
    // 로그인 요청
    const res = await todoAPI.post(`users/login`, {
      username: this.state.username,
      password: this.state.password
    });

    // localstorage에 토큰 저장
    localStorage.setItem("token", res.data.token);

    // 페이지 전환
    this.props.onLogin();
  };

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <h1>로그인이 필요합니다.</h1>
        <p>
          ID :
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </p>
        <p>
          PW :
          <input
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </p>
        <button onClick={this.handleLoginClick}>로그인하기</button>
      </React.Fragment>
    );
  }
}
