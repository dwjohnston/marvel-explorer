import React from "react";
import { MarvelCharacter } from "../../types/MarvelCharacter";

type MarvelCharacterState = {
  [key: number]: MarvelCharacter;
};

const MarvelCharacterStateContext = React.createContext<{
  characters: Array<MarvelCharacter>;
  addCharacters: (characters: Array<MarvelCharacter>) => void;
  selectedCharacter: MarvelCharacter | null;
  selectCharacter: (character: MarvelCharacter | null) => void;
}>({
  characters: [],
  selectedCharacter: null,
  selectCharacter: () => undefined,
  addCharacters: () => undefined,
});

export const MarvelCharacterStateProvider = (
  props: React.PropsWithChildren<{}>
) => {
  const { children } = props;

  // Not actually using this one, but if you needed to access a character by id, you would use this.
  const [characterIndex, setCharacterIndex] =
    React.useState<MarvelCharacterState>({});
  const [characterList, setCharacterList] = React.useState<
    Array<MarvelCharacter>
  >([]);
  const [selectedCharacter, setSelectedCharacter] =
    React.useState<MarvelCharacter | null>(null);

  const handleSelectCharacter = (character: MarvelCharacter | null) => {
    setSelectedCharacter(character);
  };

  const handleAddCharacters = (characters: Array<MarvelCharacter>) => {
    const newState = characters.reduce((acc, cur) => {
      return {
        ...acc,
        [cur.id]: cur,
      };
    }, characterIndex);

    const newList = [...characterList, ...characters];

    setCharacterIndex(newState);
    setCharacterList(newList);
  };

  return (
    <MarvelCharacterStateContext.Provider
      value={{
        characters: characterList,
        addCharacters: handleAddCharacters,
        selectCharacter: handleSelectCharacter,
        selectedCharacter,
      }}
    >
      {children}
    </MarvelCharacterStateContext.Provider>
  );
};

export const useMarvelCharacterState = () => {
  return React.useContext(MarvelCharacterStateContext);
};
