import { useState } from 'react';

function useLoaing() {
  const [isLoading, setIsLoading] = useState(true);

  const disableLoading = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    disableLoading,
  };
}

export default useLoaing;
