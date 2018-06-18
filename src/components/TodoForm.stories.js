import React from "react";

import { storiesOf } from "@storybook/react";

import TodoForm from "./TodoForm";

storiesOf("TodoForm", module).add("empty", () => <TodoForm />);
