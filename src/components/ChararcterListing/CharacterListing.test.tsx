import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterListing } from './CharacterListing';
import { ServiceFunctionContextProvider } from '../Providers/ServiceFunctionProvider';
import { mockFetchCharactersResponse } from '../../testAssets/testValues';
import { MarvelCharacterStateProvider } from '../Providers/MarvelStateProvider';

describe('<CharacterListing/>', () => {
    it("fetchs data on mount", async () => {

        const mockFetchCharacter = jest.fn();
        mockFetchCharacter.mockResolvedValue(mockFetchCharactersResponse);
        render(
            <MarvelCharacterStateProvider>
                <ServiceFunctionContextProvider fetchCharacters={mockFetchCharacter}>
                    <CharacterListing />
                </ServiceFunctionContextProvider>
            </MarvelCharacterStateProvider>
        );

        const label = await screen.findByText("3-D Man");
        const image = await screen.findByAltText("3-D Man");

        expect(label).toBeDefined();
        expect(image).toBeDefined();
    });


    it("if an error is thrown by the fetchCharacters function, an error message is display", async () => {

        const mockFetchCharacter = jest.fn();
        mockFetchCharacter.mockRejectedValue(new Error("This is an error"));
        render(
            <MarvelCharacterStateProvider>
                <ServiceFunctionContextProvider fetchCharacters={mockFetchCharacter}>
                    <CharacterListing />
                </ServiceFunctionContextProvider>
            </MarvelCharacterStateProvider>
        );

        const text = await screen.findByText("We're sorry, something went wrong. :(");
        expect(text).toBeDefined();

    });
});
