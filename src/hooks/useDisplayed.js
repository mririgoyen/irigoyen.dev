import { useEffect, useState } from 'preact/hooks';
import { useInView } from 'react-intersection-observer';

const useDisplayed = ({ id, reportVisibility }) => {
  const [ displayed, setDisplayed ] = useState(false);
  const { inView, ref } = useInView({ threshold: .01 });

  useEffect(() => {
    reportVisibility(id, inView);

    if (!inView || displayed) {
      return;
    }

    setDisplayed(true);
  }, [ displayed, inView ]);

  return { displayed, inView, ref };
};

export default useDisplayed;