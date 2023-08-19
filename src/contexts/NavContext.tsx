import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export interface NavContextInterface {
  show: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextInterface | undefined>(
  undefined
);

interface NavProviderProps {
  children: ReactNode;
}

export const NavProvider = ({ children }: NavProviderProps) => {
  const [show, setIsShow] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <NavContext.Provider
      value={{
        show,
        setIsShow,
        modalActive,
        setModalActive
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export function getNav() {
  const context = useContext(NavContext);

  if (context === undefined) {
    throw new Error('nav context is undefined');
  }
  return context;
}
