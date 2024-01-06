import React from 'react';

export const Loader: React.FC = () => {
  return (
    // standart component from bulma library
    <progress className="progress is-info" max="100">30%</progress>
  );
};
