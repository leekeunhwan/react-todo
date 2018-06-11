import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { id, body, complete, onComplete, onDelete } = this.props;
    return (
      <li className={complete ? "complete" : ""} key={id}>
        {body}
        <button
          onClick={e => {
            onComplete(id);
          }}
        >
          완료
        </button>
        <button
          onClick={e => {
            // this.setState({
            //   // 삭제 기능은 이렇게 구현할 수 있다.
            //   // 같은 아이디 (클릭한 대상)은 제외한 것만 반환하는 식으로
            //   todos: todos.filter(t => id !== t.id)
            // });
            onDelete(id);
          }}
        >
          삭제
        </button>
      </li>
    );
  }
}
