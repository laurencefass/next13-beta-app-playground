'use client';
import { useEffect, useState } from 'react';

export function Client({ value }) {
  const [mount, setMount] = useState(false);

  return (
    <>
      <h1>Child client Component</h1>
      <p>props from parent = {value}</p>
    </>
  );
}
