import { useState } from 'react';

function useDoubleClick() {
  const [isDoubledClicked, setIsDoubledClicked] = useState(false);
  if (isDoubledClicked) setTimeout(() => setIsDoubledClicked(false), 4000);

  const handleDoubleClickToggle = () => setIsDoubledClicked((prev) => !prev);

  return { isDoubledClicked, handleDoubleClickToggle, setIsDoubledClicked } as const;
}

export default useDoubleClick;
