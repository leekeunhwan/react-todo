import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TodoItem from "./TodoItem";

storiesOf("TodoItem", module)
  .add("empty", () => (
    <TodoItem id={1} onComplete={action("완료 버튼 클릭됨")} />
  ))
  .add("body가 주어진 경우", () => <TodoItem body="테스트" />)
  .add("완료된 경우", () => <TodoItem body="완료된 할일" complete />);
