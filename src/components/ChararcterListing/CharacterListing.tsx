import React from 'react';
import useAsyncEffect from 'use-async-effect';
import { fetchCharacters } from '../../serviceFunctions/fetchCharacters';
import { Attribution } from '../Attribution/Attribution';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { useMarvelCharacterState } from '../Providers/MarvelStateProvider';
import { StyledCharacterListing } from './CharacterListing.style';

export type CharacterListingProps = {
    className? : string; 
}

export const CharacterListing = (props: CharacterListingProps) => {
    const {className =''} = props;

    const { addCharacters, characters, selectCharacter } = useMarvelCharacterState();

    useAsyncEffect(async () => {
        const characters = await fetchCharacters();

        addCharacters(characters);


    }, []);

    return <StyledCharacterListing className={`dj-marvel-character-listing ${className}`}>

        <div className="listing-container">
            {Object.values(characters).map((v) => <CharacterCard key={v.id}
                onClick={() => selectCharacter(v)}
                character={v}
            />
            )}

        </div>


        <Attribution />

    </StyledCharacterListing>;
};
