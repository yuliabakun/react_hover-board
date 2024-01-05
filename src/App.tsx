import React, { useContext } from 'react';
import './App.css';
import { GameContext } from './utils/GameProvider';

export const App: React.FC = () => {
  const { isLoading, initialData } = useContext(GameContext);
  console.log(initialData);
  
  return (
    <div className="App">
      <header className="App-header">
        Hover Board Game
      </header>

      <div className="App-game">
      </div>
    </div>
  );
}

export default App;
