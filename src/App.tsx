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
      <header className="title my-4">
        Hover Board
      </header>

      {isLoading && <Loader />}

      {!isLoading && (
        <StartGameSection />
      )}

      {!isLoading && isGameStarted && (
        <HoverBoard />
      )}
    </div>
  );
};
