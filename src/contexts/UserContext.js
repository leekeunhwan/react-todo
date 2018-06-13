import React, { Component } from "react";
import todoAPI from "../todoAPI";

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  login = async (username, password) => {
    // 로그인 요청
    const res = await todoAPI.post(`users/login`, {
      username: username,
      password: password
    });

    // localstorage에 토큰 저장
    localStorage.setItem("token", res.data.token);

    // 페이지 전환
    this.props.onLogin();
  };

  render() {
    const value = {
      login: this.login
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
