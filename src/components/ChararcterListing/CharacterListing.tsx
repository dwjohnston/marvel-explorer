import React from 'react';
import useAsyncEffect from 'use-async-effect';
import { fetchCharacters } from '../../serviceFunctions/fetchCharacters';
import { Attribution } from '../Attribution/Attribution';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { useMarvelCharacterState } from '../Providers/MarvelStateProvider';
import { StyledCharacterListing } from './CharacterListing.style';

export type CharacterListingProps = {

}

export const CharacterListing = (props: CharacterListingProps) => {
    const { } = props;

    const { addCharacters, characters } = useMarvelCharacterState();

    useAsyncEffect(async () => {
        const characters = await fetchCharacters();

        addCharacters(characters);


    }, []);

    return <StyledCharacterListing>

        {Object.values(characters).map((v) => <CharacterCard key={v.id}
            character={v}
        />
        )}


        <Attribution />

    </StyledCharacterListing>;
};
