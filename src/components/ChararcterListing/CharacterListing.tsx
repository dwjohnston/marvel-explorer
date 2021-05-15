import React from 'react';
import useAsyncEffect from 'use-async-effect';
import { fetchCharacters } from '../../serviceFunctions/fetchCharacters';
import { useMarvelCharacterState } from '../Providers/MarvelStateProvider';

export type CharacterListingProps = {
    
}

export const CharacterListing = (props: CharacterListingProps) => {
  const {} = props;

  const {addCharacters, characters} = useMarvelCharacterState();

  useAsyncEffect(async () => {
    const characters = await fetchCharacters();

    addCharacters(characters);

    
  }, []); 
  
  return <div>

    {Object.values(characters).map((v) => <div key = {v.id}>
    {v.name}
    </div>)}

  </div>;   
};
