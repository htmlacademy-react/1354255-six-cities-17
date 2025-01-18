import { useState } from 'react';

import { ID } from '@/types/id';

function useSelectedPoint(id?: ID) {
  const [selectedPointId, setSelectedPointId] = useState<ID | null>(id ?? null);

  const handleSelectedPointState = (pointId?: ID) => {
    setSelectedPointId(pointId ?? null);
  };

  return {
    selectedPointId,
    handleSelectedPointState
  };
}

export default useSelectedPoint;
