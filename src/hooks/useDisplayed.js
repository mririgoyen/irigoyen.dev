import { useEffect, useState } from 'preact/hooks';
import { useInView } from 'react-intersection-observer';

const useDisplayed = ({ id, setActive }) => {
  const [ displayed, setDisplayed ] = useState(false);
  const { inView, ref } = useInView({ threshold: .2 });

  useEffect(() => {
    if (inView) {
      setActive(id);

      if (displayed) {
        return;
      }

      setDisplayed(true);
    }
  }, [ displayed, id, inView, setActive ]);

  return { displayed, inView, ref };
};

export default useDisplayed;