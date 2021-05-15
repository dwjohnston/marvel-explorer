import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAsyncEffect from "use-async-effect";
import { MarvelCharacterStateProvider } from './components/Providers/MarvelStateProvider';
import { fetchCharacters } from './serviceFunctions/fetchCharacters';
import { CharacterListing } from './components/ChararcterListing/CharacterListing';
import { Home } from './components/Home/Home';

function App() {



  return (
    <div className="App">
      <MarvelCharacterStateProvider>
         <Home />
      </MarvelCharacterStateProvider>
    </div>
  );
}

export default App;
