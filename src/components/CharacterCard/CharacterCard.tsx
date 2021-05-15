import React from 'react';
import { StyledCharacterCard } from './CharacterCard.styles';

export type CharacterCardProps = {
    
}

export const CharacterCard = (props: CharacterCardProps) => {
  const {} = props;
  return <StyledCharacterCard>
      <div className ="top-bar"/>
      <div className = "body">
            I abandoned this approach because I don't like those 1px artifacts in the corners  
        </div>
      <div className = "bottom-bar"/>
  </StyledCharacterCard>;
};
