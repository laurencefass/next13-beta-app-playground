'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>error: {error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
