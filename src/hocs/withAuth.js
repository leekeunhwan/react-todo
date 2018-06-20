// hoc에는 메인 기능보다 부가적인 부수적인 기능이면서 공통적으로 여러 컴포넌트에 필요한 정보를 담아서 사용하는 것이 일반적입니다.
// 예를 들면 Error Boundaries같은 기능

// hocs의 네이밍은 with로 시작하는 것이 관례입니다.
// import해서 hoc 를 쓸 때에는 제일 바깥쪽 스코프에서 사용하도록 합니다.
// 안쪽에서 쓰면 class가 계속 바뀌기 때문에 state가 날아가버립니다. (의도대로 절대 작동 X)
import React from "react";

import { Redirect } from "react-router-dom";

// 이게 제일 좋은 패턴입니다. (보편적)
export default function(redirectPath) {
  return function(WrappedComponent) {
    return class extends React.Component {
      render() {
        if (localStorage.getItem("token")) {
          return <WrappedComponent {...this.props} />;
          // 이 예시에는 <WrappedComponent /> 안에 {...this.props}를 넘겨줘야 HOC로부터 반환된 컴포넌트는 감싸진 컴포넌트와 유사한 사용법을 가질수 있습니다.
        } else {
          return <Redirect to={redirectPath} />;
        }
      }
    };
  };
}

// 아래처럼도 가능은 하는데 좋다고 하기에는 개인차가 있을 수 있습니다.
// export default redirectPath => WrappedComponent => class extends React.Component {
//     render() {
//         return localStorage.getItem('token') ? <WrappedComponent {...this.props} /> : <Redirect to={redirectPath} />
//     }
// }
