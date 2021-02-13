import { useEffect, useState } from 'preact/hooks';

const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState({
    height: undefined,
    width: undefined
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;