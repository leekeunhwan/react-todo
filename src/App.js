// 불러와서 모듈처럼 사용할 수 있는 것 (import)
import React, { Component } from "react";
import TodoList from "./components/TodoList";
import axios from "axios";
import "./App.css";

let count = 1;

const todoAPI = axios.create({
  baseURL: "https://mountainous-keyboard.glitch.me"
});

class App extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   id: count++,
      //   body: "React 공부",
      //   complete: true
      // },
      // {
      //   id: count++,
      //   body: "Redux 공부",
      //   complete: false
      // }
    ],
    newTodoBody: ""
  };

  // 렌더링은 항상 동기식이여야 한다.
  // 하지만 데이터를 불러오는 것은 비동기식이다.

  async componentDidMount() {
    this.setState({
      loading: true
    });
    const res = await todoAPI.get("/todos");
    this.setState({
      todos: res.data,
      loading: false
    });
  }

  // 이벤트 리스너 앞에 handle을 붙이는 것이 관례!
  handleInputChange = e => {
    this.setState({ newTodoBody: e.target.value });
  };

  handleButtonClick = e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      };

      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodoBody: ""
      });
    }
  };

  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        const newTodo = {
          ...t
        };
        if (t.id === id) {
          newTodo.complete = true;
        }
        return newTodo;
      })
    });
  };

  handleTodoItemDelete = id => {
    this.setState({
      todos: this.state.todos.filter(t => id !== t.id)
    });
  };

  render() {
    const { todos, newTodoBody, loading } = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input
            type="text"
            value={newTodoBody}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList
            todos={todos}
            handleTodoItemComplete={this.handleTodoItemComplete}
            handleTodoItemDelete={this.handleTodoItemDelete}
          />
        )}
      </div>
    );
  }
}

// 다른 곳에서 불러와서 쓸수 있도록 해주는 것이다. (export)
export default App;
