import 'server-only';

export function Server({ value }) {
  console.log('child rendering on the server');
  return (
    <>
      <h1>Child server Component</h1>
      <p>props from parent = {value}</p>
    </>
  );
}
