import React from "react";
import classnames from "classnames";

import { storiesOf } from "@storybook/react";

storiesOf("button", module)
  .add("is-primary", () => (
    <button className={classnames("button", "is-primary")}>버튼</button>
    // class를 선택적으로 넣고 싶을 때 classnames를 쓰면 됩니다.
    // classnames('button', {'is-loading':true})
    // classnames('button', {'is-loading':false})
  ))
  .add("is-info", () => <button className="button is-info">버튼</button>)
  .add("loading", () => (
    <button className={classnames("button", { "is-loading": true })}>
      로딩완료
    </button>
  ));
