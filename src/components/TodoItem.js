import React, { Component } from "react";

export default class TodoItem extends Component {
  handleBodyClick = e => {
    const newBody = prompt("새 내용을 입력하세요");
    if (newBody) {
      const { id, onBodyUpdate } = this.props;
      onBodyUpdate(id, newBody);
    } else {
      return;
    }
  };

  render() {
    const { id, body, complete, onComplete, onDelete } = this.props;
    return (
      <li className={complete ? "complete" : ""} key={id}>
        <span onClick={this.handleBodyClick}>{body}</span>
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
