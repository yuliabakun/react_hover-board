import React, { useEffect, useState } from 'react';
import { getInitialData } from '../api/fetchClient';
import { Context } from './types/Context';
import { InitData } from './types/InitData';

export const GameContext = React.createContext<Context>({
  initialData: [],
  currentGameMode: 0,
  isGameStarted: false,
  setIsGameStarted: () => {},
  fetchError: false,
  isLoading: false,
  colouredCells: [],
  setColouredCells: () => {},
  setGameMode: () => {},
});

type Props = {
  children: React.ReactNode,
}

export const GameProvider: React.FC<Props> = ({ children }) => {
  const [initialData, setInitialData] = useState<InitData[]>([]);
  const [currentGameMode, setCurrentGameMode] = useState(0);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [colouredCells, setColouredCells] = useState<string[]>([]);

  const getGameData = async () => {
    try {
      const data: InitData[] = await getInitialData();

      setInitialData(data);
    } catch {
      setFetchError(true);
    }
  };

  const setGameMode = (newMode: number) => {
    if (currentGameMode !== newMode) {
      setColouredCells([]);
      setCurrentGameMode(newMode);
    }
  }

  useEffect(() => {
    setIsLoading(true);

    getGameData()
      .finally(() => setIsLoading(false));
  }, []);

  const value = {
    initialData,
    currentGameMode,
    isGameStarted,
    setIsGameStarted,
    fetchError,
    isLoading,
    colouredCells,
    setColouredCells,
    setGameMode,
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
};
