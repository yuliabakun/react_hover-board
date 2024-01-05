import React from 'react';
import './HoverStatusList.scss';

type Props = {
  activeItems: string[];
};

export const HoverStatusList: React.FC<Props> = ({
  activeItems,
}) => {

  return (
    <div>
      <h3>Hover Squares</h3>

      <ul className="hover-list">
        {activeItems.map(item => (
          <li key={item} className="hover-list__item notification is-warning is-light">
            {`row ${item.split('-').at(2)} column ${item.split('-').at(1)}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
