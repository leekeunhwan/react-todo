// React 개발시 Component Tree를 그려보고 개발하도록 하자

// 불러와서 모듈처럼 사용할 수 있는 것 (import)
import React, { Component } from "react";

import "../App.css";
import TodoContainer from "../containers/TodoContainer";
import { TodoProvider } from "../contexts/TodoContext";

class TodoPage extends Component {
  render() {
    // Consumer위에 Provider로 감싸줘야 데이터 전달이 되는 것은 기본적으로 알고 있을 것입니다.
    // Consumer 바로 위가 아닌 상위에서 감싸주기만 하면 되므로 깔끔하게 관리가 잘될 만한 곳에서 감싸주도록 하는게 좋습니다.
    return (
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    );
  }
}

// 다른 곳에서 불러와서 쓸수 있도록 해주는 것이다. (export)
export default TodoPage;
