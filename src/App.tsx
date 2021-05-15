import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAsyncEffect from "use-async-effect";
import { MarvelCharacterStateProvider } from './components/Providers/MarvelStateProvider';
import { fetchCharacters } from './serviceFunctions/fetchCharacters';
import { CharacterListing } from './components/ChararcterListing/CharacterListing';

function App() {



  return (
    <div className="App">
      <MarvelCharacterStateProvider>
        <CharacterListing />
      </MarvelCharacterStateProvider>
    </div>
  );
}

export default App;
