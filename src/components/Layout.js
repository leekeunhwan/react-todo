import React from "react";

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">{this.props.children}</div>
        <div className="main">
          <div className="content">{this.props.content}</div>
        </div>
        <div className="footer">{this.props.footer}</div>
      </React.Fragment>
    );
  }
}

class Install extends React.Component {
  render() {
    return (
      <Layout
        navbar={<Navbar />}
        content={<InstallPageContent />}
        footer={<Footer />}
      />
    );
  }
}
