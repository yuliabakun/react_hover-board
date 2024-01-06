import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameProvider } from './utils/GameProvider';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
