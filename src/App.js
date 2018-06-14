import React from "react";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";

import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { UserProvider } from "./contexts/UserContext";

class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <PageConsumer>
          {value => (
            <UserProvider onLogin={value.login}>
              {value.page === "requireLogin" ?  <LoginPage /> : <TodoPage />}
            </UserProvider>
          )}
        </PageConsumer>
      </PageProvider>
    );
  }
}

export default App;
