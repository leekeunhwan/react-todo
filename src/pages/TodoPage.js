// React 개발시 Component Tree를 그려보고 개발하도록 하자

// 불러와서 모듈처럼 사용할 수 있는 것 (import)
import React, { Component } from "react";

import "../App.css";
import TodoContainer from "../containers/TodoContainer";

class TodoPage extends Component {
  render() {
    return <TodoContainer />;
  }
}

// 다른 곳에서 불러와서 쓸수 있도록 해주는 것이다. (export)
export default TodoPage;
