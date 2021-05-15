import React from 'react';
import { MarvelCharacter } from '../../types/MarvelCharacter';
import { StyledCharacterCard } from './CharacterCard.styles';

export type CharacterCardProps = {
    character: MarvelCharacter;
    onClick: () => void; 
}

export const CharacterCard = (props: CharacterCardProps) => {
  const {character, onClick} = props;


  return <StyledCharacterCard role ="button" onClick = {onClick}>
    <div className ="img-container">
    <img src = {`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`} alt = {character.name}/>
    </div>
    <p>{character.name}</p>
  </StyledCharacterCard>;
};
