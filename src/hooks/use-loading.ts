import { useState } from 'react';

function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  const disableLoading = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    disableLoading,
  };
}

export default useLoading;
