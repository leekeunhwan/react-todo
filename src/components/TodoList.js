import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { todos, onTodoComplete, onTodoDelete, onTodoUpdate } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            onBodyUpdate={onTodoUpdate}
            onComplete={onTodoComplete}
            onDelete={onTodoDelete}
          />
        ))}
      </ul>
    );
  }
}
