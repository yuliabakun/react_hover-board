import React, { useContext } from 'react';
import { GameContext } from '../../utils/GameProvider';
import './HoverStatusList.scss';

export const HoverStatusList: React.FC = () => {
  const { colouredCells } = useContext(GameContext);

  const getCellName = (cell: string): string => {
    const cellRow = cell.split('-').at(1);
    const cellCol = cell.split('-').at(2);

    return `row ${cellRow} col ${cellCol}`;
  };

  return (
    <ul>
      {colouredCells.map(item => (
        <li key={item} className="list-item">
          {getCellName(item)}
        </li>
      ))}
    </ul>
  );
};
