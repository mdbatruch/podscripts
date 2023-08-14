import { ReactNode, createContext, useContext, useState } from 'react';
import PODCASTS from 'mocks/PODCASTS.json';

interface PodcastType {
  id: number;
  podcast_title: string;
}

export interface DataContextInterface {
  podcasts: PodcastType[];
}

export const DataContext = createContext<DataContextInterface | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [podcasts] = useState<PodcastType[]>(PODCASTS);

  return (
    <DataContext.Provider value={{ podcasts }}>{children}</DataContext.Provider>
  );
};

export function getData() {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error('data context is undefined');
  }
  return context;
}
