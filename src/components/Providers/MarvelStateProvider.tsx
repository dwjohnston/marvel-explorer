
import React from "react";
import { MarvelCharacter } from '../../types/MarvelCharacter';


type MarvelCharacterState = {
    [key: number]: MarvelCharacter;
}

const MarvelCharacterStateContext = React.createContext<{
    characters: MarvelCharacterState;
    addCharacters: (characters: Array<MarvelCharacter>) => void;
}>({
    characters: {}, 
    addCharacters: () => undefined
});

export const MarvelCharacterStateProvider = (props: React.PropsWithChildren<{}>) => {

    const {
        children
    } = props;

    const [state, setState] = React.useState<MarvelCharacterState>({}); 

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
            addCharacters: handleAddCharacters
        }
    } >
        {children}
    </MarvelCharacterStateContext.Provider>
}


export const useMarvelCharacterState = () => {
    return React.useContext(MarvelCharacterStateContext);
}