import React, { Component } from "react";

import LoginForm from "../components/LoginForm";
import { UserConsumer } from "../contexts/UserContext";
import { Redirect } from "react-router-dom";

export default class LoginFormContainer extends Component {
  state = {
    success: false
  };
  render() {
    if (this.state.success) {
      return <Redirect to="todo" />;
    } else {
      return (
        <UserConsumer>
          {({ login }) => (
            <LoginForm
              onLogin={async (username, password) => {
                await login(username, password);
                this.setState({
                  success: true
                });
              }}
            />
          )}
        </UserConsumer>
      );
    }
  }
}
