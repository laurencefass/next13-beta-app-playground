import 'server-only';

export function Server() {
  console.log('This is a child server component');
  return (
    <>
      <h1>Child server Component</h1>
      <p>I render only on the server. Check the server console log!</p>
      <br />
    </>
  );
}
