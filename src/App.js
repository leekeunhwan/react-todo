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
            {(
              value // 로그인을 하지않은상태는 value.page === "requireLogin"가 맞기 때문에 LoginPage 컴포넌트만 남게된다.
            ) =>
              // 로그인을 하게되면 value.page의 값이 변하므로 LoginPage 컴포넌트는 날아가고 TodoPage 컴포넌트만 남게된다.
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
