import { ReactNode } from 'react';
import { DataProvider } from './DataContext';
import { NavProvider } from './NavContext';

interface Props {
  children: ReactNode;
}

const MainProvider = ({ children }: Props) => {
  return (
    <NavProvider>
      <DataProvider>{children}</DataProvider>
    </NavProvider>
  );
};

export default MainProvider;
