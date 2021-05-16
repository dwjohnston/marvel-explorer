import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { Home } from './Home';
import { mockFetchCharactersResponse } from '../../testAssets/testValues';
import { MarvelCharacterStateProvider } from '../Providers/MarvelStateProvider';
import { ServiceFunctionContextProvider } from '../Providers/ServiceFunctionProvider';

describe('<Home/>', () => {

    it("Clicking a card will show that character in the side panel", async () => {

        const mockFetchCharacter = jest.fn();
        mockFetchCharacter.mockResolvedValue(mockFetchCharactersResponse);
        render(
            <MarvelCharacterStateProvider>
                <ServiceFunctionContextProvider fetchCharacters={mockFetchCharacter}>
                    <Home />
                </ServiceFunctionContextProvider>
            </MarvelCharacterStateProvider>
        );

        const label = await screen.findByText("3-D Man");
        const image = await screen.findByAltText("3-D Man");

        expect(label).toBeDefined();
        expect(image).toBeDefined();

        userEvent.click(label);

        const comicAppearance = screen.getAllByText("Avengers: The Initiative (2007 - 2010)");
        expect(comicAppearance).toBeDefined();
        
    });




});
