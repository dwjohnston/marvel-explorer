import React from "react";
import { COLOR_BLACK_2 } from "../../theme/theme";
import { ErrorMessage } from "./ErrorMessage";

export const Default = () => {
  return (
    <div
      style={{
        backgroundColor: COLOR_BLACK_2,

        padding: "50px 0",
      }}
    >
      <ErrorMessage error={new Error("I am an error")} />
    </div>
  );
};

export default {
  component: ErrorMessage,
  title: "Components/ErrorMessage",
  parameters: {},
};
