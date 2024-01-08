import { InitialData } from "./InitialData";

export type Context = {
  initialData: InitialData[],
  currentGameMode: number,
  isGameStarted: boolean,
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>,
  fetchError: boolean,
  isLoading: boolean,
  colouredCells: string[],
  setColouredCells: React.Dispatch<React.SetStateAction<string[]>>,
  setGameMode: (newMode: number) => void,
};
