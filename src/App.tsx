import React, { useContext } from 'react';
import './App.scss';
import 'bulma';
import { GameContext } from './utils/GameProvider';
import { StartGameSection } from './components/StartGameSection';
import { Loader } from './components/Loader';
import { HoverBoard } from './components/HoverBoard';

export const App: React.FC = () => {
  const { isLoading, isGameStarted } = useContext(GameContext);

  return (
    <div className="App container">
      <header className="App__header title">
        Hover Board
      </header>

      {isLoading && <Loader />}

      {!isGameStarted && (
        <h2>Please pick mode and press Start to continue</h2>
      )}

      <div className="App__game box">
        <StartGameSection />
      </div>

      {!isLoading && isGameStarted && (
        <HoverBoard />
      )}
    </div>
  );
}

export default App;
