import React from "react";

const { Provider, Consumer } = React.createContext();

class PageProvider extends React.Component {
  state = {
    page: "requireLogin"
  };

  goToLogin = () => {
    this.setState({
      page: "Authorized"
    });
  };

  render() {
    const value = {
      page: this.state.page,
      goToLogin: this.goToLogin
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PageProvider, Consumer as PageConsumer };
