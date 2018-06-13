import React from "react";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";

export default class App extends React.Component {
  state = {
    page: "requireLogin"
  };

  login = () => {
    this.setState({
      page: "Authorized"
    });
  };

  render() {
    const { page } = this.state;
    return (
      <React.Fragment>
        {page === "requireLogin" ? (
          <LoginPage onLogin={this.login} />
        ) : (
          <TodoPage />
        )}
      </React.Fragment>
    );
  }
}
