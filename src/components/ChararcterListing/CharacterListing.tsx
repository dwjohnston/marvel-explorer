import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { fetchCharacters } from '../../serviceFunctions/fetchCharacters';
import { getLargestImage } from '../../utils/getMarvelImage';
import { Attribution } from '../Attribution/Attribution';
import { Button } from '../Button/Button';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { useMarvelCharacterState } from '../Providers/MarvelStateProvider';
import { StyledCharacterListing } from './CharacterListing.style';

export type CharacterListingProps = {
    className? : string; 
}

export const CharacterListing = (props: CharacterListingProps) => {
    const {className =''} = props;

    const { addCharacters, characters, selectCharacter } = useMarvelCharacterState();

    const [requestOffset, setRequestOffset] = useState(0);

    useAsyncEffect(async () => {
        const result = await fetchCharacters();

        const characters = result.data.results;
        console.log(result);
        addCharacters(characters);
        setRequestOffset(result.data.offset + result.data.count);


    }, []);


    const handleLoadMoreClick = async () => {
        const result = await fetchCharacters(requestOffset); 
        const characters = result.data.results;

        addCharacters(characters);
        setRequestOffset(result.data.offset + result.data.count);
    }

    const charactersToUse = Object.values(characters).filter((v) => {
        return !!getLargestImage(v.thumbnail)
    });

    return <StyledCharacterListing className={`dj-marvel-character-listing ${className}`}>

        <div className="listing-container">
            {charactersToUse.map((v) => <CharacterCard key={v.id}
                onClick={() => selectCharacter(v)}
                character={v}
            />
            )}
        </div>

        <Button className = "load-more-button" label ="Load more" onClick = {handleLoadMoreClick}/>




    </StyledCharacterListing>;
};
