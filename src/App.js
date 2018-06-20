import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";

import { UserProvider } from "./contexts/UserContext";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route path="/login" component={LoginPage} />
          <Route path="/todo" render={() => <TodoPage title="My Title" />} />
          {/* 만약에 어떤 페이지에 prop을 넘겨주고 싶은 경우 render를 사용하여 넘겨줄 수 있습니다. (일종의 편의기능) */}
          {/* 대부분의 경우는 component를 사용해도 잘 작동합니다. */}
          <Route exact path="/" component={Home} />
        </UserProvider>
      </BrowserRouter>
    );
  }
}

const Home = () =>
  localStorage.getItem("token") ? (
    <Redirect to="todo" />
  ) : (
    <Redirect to="login" />
  );

export default App;
