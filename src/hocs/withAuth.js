// hocs의 네이밍은 with로 시작하는 것이 관례입니다.
import React from "react";

import { Redirect } from "react-router-dom";

export default function(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (localStorage.getItem("token")) {
        return <WrappedComponent {...this.props} />;
        // 이 예시에는 <WrappedComponent /> 안에 {...this.props}를 넘겨줘야 HOC로부터 반환된 컴포넌트는 감싸진 컴포넌트와 유사한 사용법을 가질수 있습니다.
      } else {
        return <Redirect to="login" />;
      }
    }
  };
}
