import React, { useContext } from 'react';
import './StartGameSection.scss'
import { GameContext } from '../../utils/GameProvider';

export const StartGameSection: React.FC = () => {
  const {
    initialData,
    currentGameMode,
    setGameMode,
    setIsGameStarted,
  } = useContext(GameContext);

  return (
    <div className="game-setup">
      <div className="select">
        <select
          name="game-modes-select"
          className="game-setup__select select"
          defaultValue="selectOption"
          onChange={event => setGameMode(+event.target.value)}
        >
          <option value="selectOption" disabled>
            Pick mode
          </option>

          {initialData.map(item => (
            <option key={item.id} value={item.field}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="game-setup__start button is-info"
        disabled={!currentGameMode}
        onClick={() => setIsGameStarted(true)}
      >
        Start Game
      </button>
    </div>
  )
};
