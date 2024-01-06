import React, { useContext, useEffect, useState } from 'react';
import './HoverBoard.scss';
import { GameContext } from '../../utils/GameProvider';
import { HoverStatusList } from '../HoverStatusList';
import { Cell } from '../../utils/types/Cell';

export const HoverBoard: React.FC = () => {
  const {
    currentGameMode,
    colouredCells,
    setColouredCells,
  } = useContext(GameContext);
  const [board, setBoard] = useState<Cell[][]>([]);

  useEffect(() => {
    const createBoard = () => {
      const newBoard = [];

      for (let row = 1; row <= currentGameMode; row++) {
        const newRow = [];

        for (let col = 1; col <= currentGameMode; col++) {
          const id = `item-${row}-${col}`;

          newRow.push({ id, row, col });
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
    <div className="game-container">
      <div className="board">
        <table className="game-table">
          <tbody>
            {board.map((row, rowIndex) => (
              <tr
                key={rowIndex}
              >
                {row.map((item) => (
                  <td
                    key={item.id}
                    className="game-table__cell"
                    onMouseOver={() => handleHover(item.id)}
                    style={{ background: colouredCells.includes(item.id) ? 'lightblue' : 'white' }}
                  >
                    <div className="content"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <HoverStatusList />
    </div>
  );
};
