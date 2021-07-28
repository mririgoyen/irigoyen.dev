import { useEffect, useRef } from 'preact/hooks';

interface CallbackInterface {
  (): void;
}

interface UseIntervalInterface {
  (callback: CallbackInterface, delay: number | null): void;
}

const useInterval: UseIntervalInterface = (callback, delay) => {
  const savedCallback = useRef<CallbackInterface>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [ callback ]);

  useEffect(() => {
    function tick() {
      savedCallback.current!();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [ delay ]);
};

export default useInterval;
