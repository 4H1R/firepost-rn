import { useEffect, useState } from 'react';

function useDoubleClick(waitFor = 4) {
  const [isDoubledClicked, setIsDoubledClicked] = useState(false);
  const [passedSeconds, setPassedSeconds] = useState(0);
  const remainingSeconds = waitFor - passedSeconds;

  const handleDoubleClickToggle = () => setIsDoubledClicked((prev) => !prev);
  if (isDoubledClicked && remainingSeconds === 0) {
    setIsDoubledClicked(false);
    setPassedSeconds(0);
  }

  useEffect(() => {
    if (!isDoubledClicked) return;
    const interval = setInterval(() => {
      setPassedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isDoubledClicked]);

  return {
    isDoubledClicked,
    handleDoubleClickToggle,
    setIsDoubledClicked,
    remainingSeconds,
    passedSeconds,
  } as const;
}

export default useDoubleClick;
