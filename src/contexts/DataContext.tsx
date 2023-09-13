import MURDER from 'mocks/podcasts/my-favourite-murder.json';
import SCARE from 'mocks/podcasts/red-scare.json';
import FRIEDLAND from 'mocks/podcasts/the-adam-friedland-show.json';
import WEEKEND from 'mocks/podcasts/this-past-weekend.json';
import PODCASTS from 'mocks/PODCASTS.json';
import { createContext, ReactNode, useContext, useState } from 'react';

interface PodcastType {
  id: number;
  podcast_id?: number;
  title: string;
  episode_number?: string;
  episode_url_slug?: string;
  description?: string;
  series?: string;
  author?: string | null;
  path?: string | null;
  mp3_path?: string | null;
  episode_length?: number | null;
  transcript?: string;
  transcript_text?: string;
  transcript_done?: number;
  fave_count?: number;
  comment_count?: number;
  release_date?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface DataContextInterface {
  podcasts: PodcastType[];
  episodes: PodcastType[];
}

export const DataContext = createContext<DataContextInterface | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const combinedEpisodes = [...MURDER as PodcastType[], ...SCARE as PodcastType[], ...FRIEDLAND as PodcastType[], ...WEEKEND as PodcastType[]];
  const [podcasts] = useState<PodcastType[]>(PODCASTS);
  const [episodes] = useState<PodcastType[]>(combinedEpisodes);

  return (
    <DataContext.Provider value={{ podcasts, episodes }}>{children}</DataContext.Provider>
  );
};

export function getData() {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error('data context is undefined');
  }
  return context;
}
