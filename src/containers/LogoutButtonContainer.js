import React, { Component } from "react";

import { UserConsumer } from "../contexts/UserContext";
import { Redirect } from "react-router-dom";

export default class LogoutButtonContainer extends Component {
  state = {
    success: false
  };

  render() {
    if (this.state.success) {
      return <Redirect to="login" />;
    } else {
      return (
        <UserConsumer>
          {({ logout }) => (
            <button
              onClick={e => {
                logout();
                this.setState({
                  success: true
                });
              }}
            >
              로그아웃
            </button>
          )}
        </UserConsumer>
      );
    }
  }
}
