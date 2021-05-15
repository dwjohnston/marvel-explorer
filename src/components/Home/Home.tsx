import React from 'react';
import { Attribution } from '../Attribution/Attribution';
import { CharacterListing } from '../ChararcterListing/CharacterListing';
import { useMarvelCharacterState } from '../Providers/MarvelStateProvider';
import { SelectedCharacterPanel } from '../SelectedCharacterPanel/SelectedCharacterPanel';
import { StyledHome } from './Home.styles';

export type HomeProps = {

}

export const Home = (props: HomeProps) => {
    const { } = props;

    const {selectedCharacter} = useMarvelCharacterState();
    return <StyledHome>
        <div className ="main">
        <CharacterListing className = {!!selectedCharacter ? "character-selected" : ''}/>
        <SelectedCharacterPanel className = {!!selectedCharacter ? "character-selected" : ''}/>
        </div>
        <Attribution />

    </StyledHome   >;
};
