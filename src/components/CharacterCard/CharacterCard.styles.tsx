import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_WHITE_2,
  MEDIA_QUERY_IS_DESKTOP,
} from "../../theme/theme";

export const StyledCharacterCard = styled.div`
  padding: 16px;
  width: 200px;

  ${MEDIA_QUERY_IS_DESKTOP} {
    width: 200px;
  }

  img {
    max-width: 100%;
  }

  background: linear-gradient(
    to bottom right,
    ${COLOR_BLACK} 95%,
    ${COLOR_RED} 95%
  );
  color: ${COLOR_WHITE_2};
  box-shadow: 0 2px 4px ${COLOR_RED};

  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.005, 1.005);
  }

  // Box shadow animation from here
  // https://tobiasahlin.com/blog/how-to-animate-box-shadow/

  &::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px ${COLOR_RED};
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::after {
    opacity: 1;
  }
`;

//I'm abandoning this approach because you get a yuck little 1px artifact where the body meets the bars
// The calcuation is tan(skewDegrees) * height to get the horizontal offset amount
// Then but then halve it because it's the offset straddles the border.
// If you wanted to achieve this shape, I would use an SVG.
