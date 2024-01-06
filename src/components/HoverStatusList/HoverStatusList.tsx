import React, { useContext } from 'react';
import { GameContext } from '../../utils/GameProvider';
import './HoverStatusList.scss';

export const HoverStatusList: React.FC = () => {
  const { colouredCells } = useContext(GameContext);

  return (
    <div>
      <h3>Hover Squares</h3>

      <ul className="hover-list">
        {colouredCells.map(item => (
          <li key={item} className="hover-list__item notification is-warning is-light">
            {`row ${item.split('-').at(1)} col ${item.split('-').at(2)}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
