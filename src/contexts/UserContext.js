import React, { Component } from "react";
import todoAPI from "../todoAPI";

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  login = async (username, password) => {
    try {
      // 로그인 요청
      const res = await todoAPI.post(`users/login`, {
        username: username,
        password: password
      });

      // localstorage에 토큰 저장
      localStorage.setItem("token", res.data.token);

      // 페이지 전환
      // this.props.onLogin();
    } catch (e) {
      if (e.response) {
        if (e.response.status === 400) {
          alert(`아이디 혹은 비밀번호가 일치하지 않습니다.`);
        }
      }
      window.location.reload();
    }
  };

  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout
    };
    // Provider의 value prop에 value 값을 내려주면 Consumer에서 쓸 수 있다.
    // Context API를 이용하면 props의 패스가 없이 하위 Component에게 값을 내려줄 수 있다.
    // children은 다른 내용을 포함하는 Component를 만들때 사용할 수 있다.
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
