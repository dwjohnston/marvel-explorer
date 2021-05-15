import React from 'react';
import { CharacterListing } from '../ChararcterListing/CharacterListing';
import { SelectedCharacterPanel } from '../SelectedCharacterPanel/SelectedCharacterPanel';

export type HomeProps = {

}

export const Home = (props: HomeProps) => {
    const { } = props;
    return <>
        <CharacterListing />
        <SelectedCharacterPanel />

    </>;
};
