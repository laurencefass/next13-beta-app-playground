'use client';

export function Thrower() {
  function handleClick() {
    throw new Error('whoops!');
  }
  return (
    <>
      <button onClick={handleClick}>Trigger error</button>
    </>
  );
}
