import React, { Component } from "react";

import LoginForm from "../components/LoginForm";
import { UserConsumer } from "../contexts/UserContext";
import { PageConsumer } from "../contexts/PageContext";
export default class LoginFormContainer extends Component {
  render() {
    return (
      <UserConsumer>
        {({ login }) => (
          <PageConsumer>
            {({ goToLogin }) => (
              <LoginForm
                onLogin={async (username, password) => {
                  await login(username, password);
                  goToLogin();
                }}
              />
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    );
    /* 
      분해대입 패턴 

      function add({x, y}) {
         return x + y
      }
      add({x: 2, y: 3})

      function TodoItem ({body}) {
        return (
          <li>{body}</li>
        )
      }
      */
  }
}
