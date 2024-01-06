import React, { useContext, useEffect, useState } from 'react';
import './HoverBoard.scss';
import { GameContext } from '../../utils/GameProvider';
import { HoverStatusList } from '../HoverStatusList';

export const HoverBoard: React.FC = () => {
  const [board, setBoard] = useState<string[][]>([]);
  const {
    currentGameMode,
    colouredCells,
    setColouredCells,
  } = useContext(GameContext);

  useEffect(() => {
    const createBoard = () => {
      const newBoard = [];

      for (let row = 1; row <= currentGameMode; row++) {
        const newRow = [];

        for (let col = 1; col <= currentGameMode; col++) {
          const cell = `item-${row}-${col}`;

          newRow.push(cell);
        }

        newBoard.push(newRow);
      }

      setBoard(newBoard);
    };

    createBoard();
  }, [currentGameMode]);

  const handleHover = (itemId: string) => {
    setColouredCells((colouredCells) => {
      if (colouredCells.includes(itemId)) {
        return colouredCells.filter((id) => id !== itemId);
      } else {
        return [...colouredCells, itemId];
      }
    });
  };

  return (
    <div className="game">
      <div className="game__board">
        <table className="game-table">
          <tbody>
            {board.map((row, rowIndex) => (
              <tr
                key={rowIndex}
              >
                {row.map((item) => (
                  <td
                    key={item}
                    className="game-table__cell"
                    onMouseOver={() => handleHover(item)}
                    style={{ background: colouredCells.includes(item) ? 'lightblue' : 'white' }}
                  >
                    <div className="game-table__cell__content"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="game__status">
        <HoverStatusList />
      </div>
    </div>
  );
};
