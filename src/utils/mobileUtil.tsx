import { useEffect, useState } from 'react';

const getIsMobile = () => window.innerWidth <= 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  const onResize = () => {
    setIsMobile(getIsMobile());
  };

  useEffect(() => {
    setIsMobile(getIsMobile());
  }, [onResize]);

  window.addEventListener('resize', onResize);

  return isMobile;
};
