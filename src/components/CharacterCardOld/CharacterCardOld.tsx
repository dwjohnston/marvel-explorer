import React from 'react';
import { StyledCharacterCardOld } from './CharacterCardOld.styles';

export type CharacterCardProps = {
    
}

export const CharacterCardOld = (props: CharacterCardProps) => {
  const {} = props;
  return <StyledCharacterCardOld>
      <div className ="top-bar"/>
      <div className = "body">
            <p>I abandoned this approach because I don't like those 1px artifacts in the corners  </p>
            <p> If you wanted to achieve this shape, I would use an SVG</p>
        </div>
      <div className = "bottom-bar"/>
  </StyledCharacterCardOld>;
};
