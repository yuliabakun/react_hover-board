import React, { useContext } from 'react';
import './App.scss';
import 'bulma';
import { GameContext } from './utils/GameProvider';
import { StartGameSection } from './components/StartGameSection';
import { HoverBoard } from './components/HoverBoard';
import { Loader } from './components/Loader';

export const App: React.FC = () => {
  const { isLoading, isGameStarted } = useContext(GameContext);

  return (
    <div className="App container">
      <header className="App__header title">
        Hover Board
      </header>

      {isLoading && <Loader />}

      {!isLoading && !isGameStarted && (
        <h2>Please pick mode and press Start to continue</h2>
      )}

      {!isLoading && (
        <StartGameSection />
      )}

      {!isLoading && isGameStarted && (
        <HoverBoard />
      )}
    </div>
  );
}
