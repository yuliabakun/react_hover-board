import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GameProvider } from './utils/GameProvider';

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
