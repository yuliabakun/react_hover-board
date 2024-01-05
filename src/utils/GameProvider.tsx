import React, { useEffect, useState } from 'react';
import { getInitialData } from '../api/fetchClient';

type InitData = {
  id: string,
  name: string,
  field: number
};

type Context = {
  initialData: InitData[],
  fetchError: boolean,
  isLoading: boolean,
};

export const GameContext = React.createContext<Context>({
  initialData: [],
  fetchError: false,
  isLoading: false,
});

type Props = {
  children: React.ReactNode,
}

export const GameProvider: React.FC<Props> = ({ children }) => {
  const [initialData, setInitialData] = useState<InitData[]>([]);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getGameData = async () => {
    try {
      const data: InitData[] = await getInitialData();

      setInitialData(data);
    } catch {
      setFetchError(true);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    getGameData()
      .finally(() => setIsLoading(false));
  }, []);

  const value = {
    initialData,
    fetchError,
    isLoading,
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
};
