import { themes } from "@storybook/theming";
import React from "react";
import styled from "styled-components";

import * as Theme from "./theme";

const StyledThemeContainer = styled.div`
  div {
    padding: 1em;
    &.black-1 {
      background-color: ${Theme.COLOR_BLACK};
    }
    &.black-2 {
      background-color: ${Theme.COLOR_BLACK_2};
    }
    &.red {
      background-color: ${Theme.COLOR_RED};
    }
    &.white-1 {
      background-color: ${Theme.COLOR_WHITE};
    }
    &.white-2 {
      background-color: ${Theme.COLOR_WHITE_2};
    }
  }

  p,
  h3 {
    &.black-1 {
      color: ${Theme.COLOR_BLACK};
    }
    &.black-2 {
      color: ${Theme.COLOR_BLACK_2};
    }
    &.red {
      color: ${Theme.COLOR_RED};
    }
    &.white-1 {
      color: ${Theme.COLOR_WHITE};
    }
    &.white-2 {
      color: ${Theme.COLOR_WHITE_2};
    }
  }
`;

export const Default = () => {
  return (
    <StyledThemeContainer>
      <div className="black-1">
        <h3 className="white-1">COLOR_BLACK: {Theme.COLOR_BLACK}</h3>

        <p className="white-1"> COLOR_WHITE</p>
        <p className="white-2"> COLOR_WHITE_2</p>
        <p className="red"> COLOR_RED</p>
      </div>
      <div className="black-2">
        <h3 className="white-1">COLOR_BLACK_2: {Theme.COLOR_BLACK_2}</h3>

        <p className="white-1"> COLOR_WHITE</p>
        <p className="white-2"> COLOR_WHITE_2</p>
        <p className="red"> COLOR_RED</p>
      </div>
      <div className="red">
        <h3 className="white-1">COLOR_RED: {Theme.COLOR_RED}</h3>

        <p className="white-1"> COLOR_WHITE</p>
        <p className="white-2"> COLOR_WHITE_2</p>
        <p className="black-1"> COLOR_BLACK</p>
        <p className="black-2"> COLOR_BLACK_2</p>
      </div>
      <div className="white-1">
        <h3 className="black-1"> COLOR_WHITE: {Theme.COLOR_WHITE}</h3>

        <p className="red"> COLOR_RED</p>
        <p className="black-1"> COLOR_BLACK</p>
        <p className="black-2"> COLOR_BLACK_2</p>
      </div>
      <div className="white-2">
        <h3 className="black-1"> COLOR_WHITE_2: {Theme.COLOR_WHITE_2}</h3>

        <p className="red"> COLOR_RED</p>
        <p className="black-1"> COLOR_BLACK</p>
        <p className="black-2"> COLOR_BLACK_2</p>
      </div>
    </StyledThemeContainer>
  );
};

export default {
  title: "Theme/Theme",
};
