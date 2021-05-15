import React from 'react';

import { MarvelCharacterStateProvider } from './components/Providers/MarvelStateProvider';
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
