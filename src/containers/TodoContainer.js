import React, { Component } from "react";

import "../App.css";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { TodoConsumer } from "../contexts/TodoContext";

export default class TodoContainer extends Component {
  render() {
    return (
      <TodoConsumer>
        {/* Counsumer는 Provider가 있어야 효과를 볼 수 있다 - 만드는 것만으로는 아무런 효과가 나타나지 않는다.*/}
        {({
          loading,
          todos,
          createTodo,
          updateTodoBody,
          completeTodo,
          deleteTodo
        }) => (
          <div>
            <h1>할 일 목록</h1>

            <TodoForm
              handleButtonClick={this.handleButtonClick}
              onCreate={createTodo}
            />
            {loading ? (
              <div>loading...</div>
            ) : (
              <TodoList
                todos={todos}
                onTodoUpdate={updateTodoBody}
                onTodoComplete={completeTodo}
                onTodoDelete={deleteTodo}
              />
            )}
          </div>
        )}
      </TodoConsumer>
    );
  }
}
