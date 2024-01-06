import React, { useContext } from 'react';
import { GameContext } from '../../utils/GameProvider';
import './StartGameSection.scss'

export const StartGameSection: React.FC = () => {
  const {
    initialData,
    currentGameMode,
    setGameMode,
    setIsGameStarted,
  } = useContext(GameContext);

  return (
    <div className="game-setup box">
      <div className="select">
        <select
          name="game-modes-select"
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
        Start
      </button>
    </div>
  )
};
