import React from 'react';

export const Loader: React.FC = () => {
  return (
    <progress className="progress is-info" max="100">30%</progress>
  );
};
