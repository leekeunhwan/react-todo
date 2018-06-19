import React from "react";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";

import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { UserProvider } from "./contexts/UserContext";


class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value =>
              value.page === "requireLogin" ? <LoginPage /> : <TodoPage />
            /* UserProvider사이에 들어가는 값이 UserContext의 {this.props.children}에 들어가게 된다.*/
            }
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    );
  }
}

export default App;
