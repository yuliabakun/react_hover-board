import React, { useContext } from 'react';
import { GameContext } from '../../utils/GameProvider';
import './StartGameSection.scss'

export const StartGameSection: React.FC = () => {
  const {
    initialData,
    currentGameMode,
    setGameMode,
    setColouredCells,
    isGameStarted,
    setIsGameStarted,
    fetchError,
  } = useContext(GameContext);

  const handleGameStart = () => {
    if (isGameStarted) {
      setColouredCells([]);
    } else {
      setIsGameStarted(true);
    }
  };

  return (
    <div className="setup box">
      <div className="setup-controls">
        <div className="select">
          <select
            name="game-mode-select"
            defaultValue="pickOption"
            onChange={event => setGameMode(+event.target.value)}
          >
            <option value="pickOption" disabled>
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
          className="button is-info is-uppercase ml-4"
          disabled={!currentGameMode}
          onClick={handleGameStart}
        >
          Start
        </button>
      </div>

      {fetchError && (
        <p className="has-text-weight-bold">Sorry, server is unavailable</p>)}

      {!fetchError && !isGameStarted && (
        <p>Please pick mode and press Start to continue</p>)}

      {!fetchError && isGameStarted && (
        <p className="has-text-weight-bold">Hover Squares</p>
      )}
    </div>
  );
};
