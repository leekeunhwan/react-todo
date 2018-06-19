import React from "react";

export default class OnMount extends React.Component {
  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }
  // 화면을 그리기 위해 렌더링을 하는 것은 맞지만 화면을 그리는 것과 렌더링을 하는 것과는 다릅니다.
  render() {
    return null;
  }
}
