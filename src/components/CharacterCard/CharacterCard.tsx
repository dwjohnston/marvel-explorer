import React from 'react';
import { MarvelCharacter } from '../../types/MarvelCharacter';
import { StyledCharacterCard } from './CharacterCard.styles';

export type CharacterCardProps = {
    character: MarvelCharacter;
}

export const CharacterCard = (props: CharacterCardProps) => {
  const {character} = props;

  const handleClick = () => {

  }; 

  return <StyledCharacterCard role ="button" onClick = {handleClick}>
    <div className ="img-container">
    <img src = {`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`} alt = {character.name}/>
    </div>
    <p>{character.name}</p>
  </StyledCharacterCard>;
};
