import React from "react";
import { StyledAttribution } from "./Attribution.styles";

export type AttributionProps = {};

export const Attribution = (props: AttributionProps) => {
  const {} = props;
  return (
    <StyledAttribution>
      <a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>
    </StyledAttribution>
  );
};
