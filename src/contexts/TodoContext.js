import React from "react";
import todoAPI from "../todoAPI";

const { Provider, Consumer } = React.createContext();

class TodoProvider extends React.Component {
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
    ]
  };

  // 렌더링은 항상 동기식이여야 한다.
  // 하지만 데이터를 불러오는 것은 비동기식이다.

  async componentDidMount() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    this.setState({
      loading: true
    });
    const res = await todoAPI.get("/todos");
    this.setState({
      todos: res.data,
      loading: false
    });
  };

  // 이벤트 리스너 앞에 handle을 붙이는 것이 관례!
  // 비동기함수는 promise를 반환한다.
  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      };
      this.setState({
        loading: true
      });
      await todoAPI.post(`/todos/`, newTodo);
      await this.fetchTodos();
    }
  };

  // 여기서 포인트
  // 역할과 책임 - 상태는 상태만 생각하고 UI단에서 변경사항은 UI단에서 해결하는 것
  // 메소드 네이밍은 일반적으로 영어동사로 정한다. (꼭 정해진 것은 아님)
  updateTodoBody = async (id, body) => {
    // const newBody = prompt('please enter value...')
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      body: body,
      // body: newbody 라고 해도 동작은 할 것이다.
      // 하지만 그럼에도 하지 않은 이유는 역할과 책임이다.
      complete: false
    });
    await this.fetchTodos();
  };

  completeTodo = async id => {
    const res = await todoAPI.get(`/todos/${id}`);
    this.setState({
      loading: true
    });
    if (!res.data.complete) {
      await todoAPI.patch(`/todos/${id}`, {
        complete: true
      });
    } else {
      await todoAPI.patch(`/todos/${id}`, {
        complete: false
      });
    }
    await this.fetchTodos();
  };

  deleteTodo = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.delete(`/todos/${id}`);
    await this.fetchTodos();
  };

  render() {
    const value = {
      loading: this.state.loading,
      todos: this.state.todos,
      createTodo: this.createTodo,
      fetchTodos: this.fetchTodos,
      updateTodoBody: this.updateTodoBody,
      completeTodo: this.completeTodo,
      deleteTodo: this.deleteTodo
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { TodoProvider, Consumer as TodoConsumer };
