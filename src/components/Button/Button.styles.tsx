import styled from "styled-components";
import { COLOR_RED, COLOR_WHITE, COLOR_WHITE_2 } from "../../theme/theme";

export const StyledButton = styled.div`
  border: 2px solid ${COLOR_WHITE_2};
  transform: skewX(-45deg);
  :hover {
    border-color: ${COLOR_WHITE};
    button {
      color: ${COLOR_WHITE};
    }
  }

  margin: 0 27px; // To account for the skew

  button {
    cursor: pointer;

    height: 48px;
    width: 100%;
    color: ${COLOR_WHITE_2};
    background-color: transparent;
    padding: 1em;
    border: none;

    transform: skewX(45deg);
  }
`;
