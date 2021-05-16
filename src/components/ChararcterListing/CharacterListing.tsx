import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { getLargestImage } from "../../utils/getMarvelImage";
import { Button } from "../Button/Button";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { useMarvelCharacterState } from "../Providers/MarvelStateProvider";
import { useFetchCharacters } from "../Providers/ServiceFunctionProvider";
import { StyledCharacterListing } from "./CharacterListing.style";

export type CharacterListingProps = {
  className?: string;
};

export const CharacterListing = (props: CharacterListingProps) => {
  const { className = "" } = props;

  const { addCharacters, characters, selectCharacter } =
    useMarvelCharacterState();

  const [requestOffset, setRequestOffset] = useState(0);
  const fetchCharacters = useFetchCharacters();

  const [error, setError] = useState<Error | null>(null);

  useAsyncEffect(async () => {
    await loadMoreCharacters();
  }, []);

  const loadMoreCharacters = async () => {
    try {
      const result = await fetchCharacters(requestOffset);
      const charactersResult = result.data.results;

      addCharacters(charactersResult);
      setRequestOffset(result.data.offset + result.data.count);
    } catch (err) {
      setError(err);
    }
  };

  const handleLoadMoreClick = () => {
    loadMoreCharacters();
  };

  const charactersToUse = Object.values(characters).filter((v) => {
    return !!getLargestImage(v.thumbnail);
  });

  return (
    <StyledCharacterListing
      className={`dj-marvel-character-listing ${className}`}
    >
      <ErrorMessage error={error} />
      <div className="listing-container">
        {charactersToUse.map((v) => (
          <CharacterCard
            key={v.id}
            onClick={() => selectCharacter(v)}
            character={v}
          />
        ))}
      </div>

      <Button
        className="load-more-button"
        label="Load more"
        onClick={handleLoadMoreClick}
      />
    </StyledCharacterListing>
  );
};
