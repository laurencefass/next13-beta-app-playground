'use client';
import { useEffect, useState } from 'react';

export function Client() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      console.log('child component renders in the browser');
      setMount(true);
    }
  }, []);
  return (
    <>
      <h1>Child client Component</h1>
      <p>I render only on the client. Check the browser console log!</p>
      <br />
    </>
  );
}
