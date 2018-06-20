import React, { Component } from "react";

export default class TodoForm extends Component {
  static defaultProps = {
    onCreate: () => {} // 할 일 추가 버튼 클릭 시 호출되는 함수
  };

  state = {
    newTodoBody: ""
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };

  handleButtonClick = e => {
    this.props.onCreate(this.state.newTodoBody);
    this.setState({
      newTodoBody: ""
    });
  };

  render() {
    const { newTodoBody } = this.state;
    return (
      <React.Fragment>
        <label>
          새 할일
          <input
            type="text"
            value={newTodoBody}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
      </React.Fragment>
    );
  }
}
