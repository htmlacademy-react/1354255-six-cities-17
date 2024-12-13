import { useState } from 'react';

import { ID } from '@/types/id';

function useSelectedPoint() {
  const [selectedPointId, setSelectedPointId] = useState<ID | null>(null);

  const handleSelectedPointState = (pointId?: ID) => {
    setSelectedPointId(pointId ?? null);
  };


  return {
    selectedPointId,
    handleSelectedPointState
  };
}

export default useSelectedPoint;
