
import React from "react";
import { MarvelCharacter } from '../../types/MarvelCharacter';


type MarvelCharacterState = {
    [key: number]: MarvelCharacter;
}

const MarvelCharacterStateContext = React.createContext<{
    characters: MarvelCharacterState;
    addCharacters: (characters: Array<MarvelCharacter>) => void;
    selectedCharacter: MarvelCharacter | null;
    selectCharacter: (character: MarvelCharacter | null) => void; 
}>({
    characters: {}, 
    selectedCharacter: null, 
    selectCharacter: ()=> undefined, 
    addCharacters: () => undefined
});

export const MarvelCharacterStateProvider = (props: React.PropsWithChildren<{}>) => {

    const {
        children
    } = props;

    const [state, setState] = React.useState<MarvelCharacterState>({}); 
    const [selectedCharacter, setSelectedCharacter] = React.useState<MarvelCharacter |null>(null);

    const handleSelectCharacter = (character: MarvelCharacter | null) => {
        setSelectedCharacter(character);
    }


    const handleAddCharacters = (characters: Array<MarvelCharacter>) => {
     
        const newState = characters.reduce((acc,cur) => {
            return {
                ...acc, 
                [cur.id] : cur
            }
        }, state); 

        setState(newState);
    }

    return <MarvelCharacterStateContext.Provider value = {
        {
            characters: state, 
            addCharacters: handleAddCharacters, 
            selectCharacter: handleSelectCharacter, 
            selectedCharacter
        }
    } >
        {children}
    </MarvelCharacterStateContext.Provider>
}


export const useMarvelCharacterState = () => {
    return React.useContext(MarvelCharacterStateContext);
}