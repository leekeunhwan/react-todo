// React 개발시 Component Tree를 그려보고 개발하도록 하자

// 불러와서 모듈처럼 사용할 수 있는 것 (import)
import React, { Component } from "react";

import "../App.css";
import TodoContainer from "../containers/TodoContainer";
import { TodoProvider } from "../contexts/TodoContext";
import LogoutButtonContainer from "../containers/LogoutButtonContainer";

import withAuth from "./../hocs/withAuth";

class TodoPage extends Component {
  render() {
    // Consumer위에 Provider로 감싸줘야 데이터 전달이 되는 것은 기본적으로 알고 있을 것입니다.
    // Consumer 바로 위가 아닌 상위에서 감싸주기만 하면 되므로 깔끔하게 관리가 잘될 만한 곳에서 감싸주도록 하는게 좋습니다.
    return (
      <TodoProvider>
        <h1>{this.props.title}</h1>
        <TodoContainer />
        <LogoutButtonContainer />
      </TodoProvider>
    );
  }
}

// 다른 곳에서 불러와서 사용할 수 있도록 해주는 것이다. (export)
// withAuth같은 것들은 가급적 최종프로젝트에서 Page에 적용시켜주는 것으로!!
export default withAuth(TodoPage);
