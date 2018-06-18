// 그냥 children 예제 아무것도 아닙니다.
import React from "react";

export default class Box extends React.Component {
  render() {
    const value = {
      a: 1,
      b: 2
    };
    return (
      <React.Fragment>
        <div className="Box">{this.props.children}</div>
        {/* 
            
            children에 함수도 올 수 있습니다.

            <div className="Box">{this.props.children(value)}</div>
            
        */}
      </React.Fragment>
    );
  }
}

// 텍스트 예제
<Box>hello world</Box>;

// 함수 예제
<Box>
  {value => (
    <div>
      <div>{value.a}</div>
      <div>{value.b}</div>
    </div>
  )}
</Box>;

// 이렇게 다른 곳에서 사용하면 box 콤포넌트 안에 있는 값이 box.js의 this.props.children으로 들어오게 됩니다.
// Provider를 통해 props를 넘겨줄 때 다양한 이름으로 여러개를 보내줄 수 있고, 이를 받아서 사용할 수 있다.
