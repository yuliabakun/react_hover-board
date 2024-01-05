import React, { useContext, useEffect, useState } from 'react';
import './HoverBoard.scss';
import { GameContext } from '../../utils/GameProvider';
import { HoverStatusList } from '../HoverStatusList';

export const HoverBoard: React.FC = () => {
  type Row = {
    id: string,
    row: number,
    col: number,
  }

  const { currentGameMode, colouredCells, setColouredCells } = useContext(GameContext);
  const [board, setBoard] = useState<Row[][]>([]);

  useEffect(() => {
    const createBoard = () => {
      const newBoard = [];

      for (let row = 1; row <= currentGameMode; row++) {
        const newRow = [];

        for (let col = 1; col <= currentGameMode; col++) {
          const id = `item-${row}-${col}`
          newRow.push({ id, row, col, color: null });
        }

        newBoard.push(newRow);
      }

      setBoard(newBoard);
    }

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
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <HoverStatusList activeItems={colouredCells} />
    </div>
  );
};
